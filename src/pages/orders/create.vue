<script setup>
import { useTime } from "@core/utils/time";
import { get as getAreas } from "@/apis/admin/areas";
import { getAllAreas as getRestaurantAreas } from "@/apis/restuarant/areas";
import { get as getRestaurantBranches, getServiceCost as getRestaurantServiceCost } from "@/apis/restuarant/branches";
import { get as getBranches, getServiceCost } from "@/apis/admin/branches";
import { check as checkEmployee } from "@/apis/admin/employees";
import { check as checkRestaurantEmployee } from "@/apis/restuarant/employees";
import {
  create as createOrder,
  checkPhone as getCustomer,
  checkCode as getVoucher,
} from "@/apis/admin/orders";
import {
  create as createRestaurantOrder,
  checkPhone as getRestaurantCustomer,
  checkCode as getRestaurantVoucher,
} from "@/apis/restuarant/orders";
import { getOrderProducts as getProducts } from "@/apis/admin/products";
import { get as getRestaurantProducts } from "@/apis/restuarant/products";
import { toBase64 } from "@/utils/files";
import {
  emailValidator,
  integerValidator,
  kuwaitValidator,
  requiredValidator,
} from "@validators";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";
import router from "@/router";
import { useI18n } from "vue-i18n"

const date = new Date();
const today = ref(new Date().toISOString());

const $useI18n = useI18n()
const t = $useI18n.t;
const langIdentifier = computed(() => {
    if ($useI18n.locale.value === 'en') {
      return 'name_en';
    } else if ($useI18n.locale.value === 'ar') {
      return 'name_ar';
    }
  });
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const customerPhone = ref("");
const phoneForm = ref();
const refVForm = ref();
const toast = useToast();
const loading = ref(false);
const branches = ref([]);
const availableBranches = ref([]);
const areas = ref([]);
const searchLoading = ref(false);
const branchesLoading = ref(false);
const productsLoading = ref(false);
const areasLoading = ref(false);
const imageDialog = ref(false);
const ExtraFlavorsDialog = ref(false);
const noteDialog = ref(false);
const employeeLoading = ref(false);
const products = ref([]);
const productCount = ref(1);
const selectedProduct = ref();
const orderProducts = ref([]);
const total = ref(0);
const voucherLoading = ref(false);
const timeKey = ref(0);
const addressDialog = ref(false);
const customerAddresses = ref([]);
const vCode = ref("");
const discountRate = ref("");
const discountType = ref("");
const newTotal = ref(0);
const employeeCode = ref("");
const isAnEmployee = ref(false);
const branchStart = ref(null);
const branchEnd = ref(null);
const isClosed = ref(false);
const branchStartBackup = ref(null);
const dateKey = ref(1);
const isBranchSelected = false;
const form = ref({
  is_pickup: true,
  products: [],
  email: "",
  name: "",
  agent: "",
  address_city: 1,
  delivery_date: "",
  delivery_time: "",
  delivery_cost: "",
  address_building_no: "",
  block_no: "",
  address_floor: "",
  address_phone: "",
  address_apartment: "",
  address_address_area: null,
  address_street_name: "",
  branch_id: null,
  v_code: "",
  employee_code: "",
  extra: '',
  flavor: '',
});

const imageErrors = ref([]);

const _getAreas = () => {
  areasLoading.value = true;
  getAreas().then(({ data, meta }) => {
    areas.value = data.data;
    areasLoading.value = false;
  });
};

const _getRestaurantAreas = () => {
  // const branchData = JSON.parse(localStorage.getItem("userData"));
  // getRestaurantAreas({ branch: branchData.branch_id }).then(({ data }) => {
  //   areas.value = data.data;
  //   areasLoading.value = false;
  // });

  areasLoading.value = true;
  getRestaurantAreas().then(({data}) => {
    areas.value = data.data;
    areasLoading.value = false;
  })
};

const _getRestaurantBranches = () => {
  branchesLoading.value = true;
  getRestaurantBranches().then(({data}) => {
    branches.value = data.data;
    branchesLoading.value = true;
    branches.value = data.data.filter((branch) => branch.is_active === 1);
    availableBranches.value = data.data.filter((branch) => branch.id === 2);
    branchStart.value = availableBranches.value[0].start;
    branchStartBackup.value = branchStart.value;
    branchEnd.value = availableBranches.value[0].end;
    // startTime.value = availableBranches.value[0].start;
    timeKey.value += 1;
    branchesLoading.value = false;
  })
}

const _getProducts = (params) => {
  productsLoading.value = true;
  getProducts(params).then(({ data, meta }) => {
    products.value = data.data;
    productsLoading.value = false;
  });
};

const _getRestaurantProducts = (params) => {
  productsLoading.value = true;
  getRestaurantProducts(params).then(({ data, meta }) => {
    products.value = data.data;
    productsLoading.value = false;
  });
};

const _getCustomer = () => {
  phoneForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      searchLoading.value = true;
      getCustomer({ phone: `${customerPhone.value}` })
        .then((res) => {
          toast.success("Customer found!");
          customerAddresses.value = res.data.data.length
            ? res.data.data[0]
            : [];
          form.value.email = res.data.email;
          form.value.name = res.data.name;
          addressDialog.value = true;
          searchLoading.value = false;
          addDetails();
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          searchLoading.value = false;
        });
    }
  });
};

const _getRestaurantCustomer = () => {
  phoneForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      searchLoading.value = true;
      getRestaurantCustomer({ phone: `${customerPhone.value}` })
        .then((res) => {
          toast.success("Customer found!");
          customerAddresses.value = res.data.data.length
            ? res.data.data[0]
            : [];
          form.value.email = res.data.email;
          form.value.name = res.data.name;
          addressDialog.value = true;
          searchLoading.value = false;
          addDetails();
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          searchLoading.value = false;
        });
    }
  });
};

const _getBranches = () => {
  branchesLoading.value = true;
  getBranches().then(({ data }) => {
    branches.value = data.data.filter((branch) => branch.is_active === 1);
    availableBranches.value = data.data.filter((branch) => branch.id === 2);
    // startTime.value = availableBranches.value[0].start;
    branchStart.value = availableBranches.value[0].start;
    branchStartBackup.value = branchStart.value;
    branchEnd.value = availableBranches.value[0].end;
    timeKey.value += 1;
    branchesLoading.value = false;
  });
};

const _getServiceCost = () => {
  getServiceCost().then(({ data, meta }) => {
    form.value.delivery_cost = data.data.delivery_cost;
  });
};

const _getRestaurantServiceCost = () => {
  getRestaurantServiceCost().then(({ data, meta }) => {
    form.value.delivery_cost = data.data.delivery_cost;
  });
};

// const _getRestaurant = () => {
//   const branchData = JSON.parse(localStorage.getItem("userData"));
//   let branch = [
//     {
//       id: 2,
//       name_en: "Head Branch",
//       start: "08:00",
//       end: "20:00"
//     },
//     {
//       id: branchData.branch_id,
//       name_en: branchData.name,
//       start: branchData.b_start,
//       end: branchData.b_end
//     },
//   ];
//   branches.value = branch;
//   availableBranches.value = branch.filter(b => b.id === 2);
//   startTime.value = availableBranches.value[0].start;
//   endTime.value = availableBranches.value[0].end;
// };

const _getVoucher = () => {
  voucherLoading.value = true;
  getVoucher({ v_code: vCode.value, total: total.value })
    .then((data) => {
      const types = { fixed: " KWD", percentage: "%" };
      form.value.v_code = vCode.value;
      vCode.value = "";
      discountRate.value =
        parseInt(data.data.discount_rate) + types[data.data.discount_type];
      discountType.value = data.data.discount_type;
      toast.success(data.data.message);
      voucherLoading.value = false;
    })
    .catch((err) => {
      toast.error(err.response.data.message);
      voucherLoading.value = false;
    });
};

const _getRestaurantVoucher = () => {
  voucherLoading.value = true;
  getRestaurantVoucher({ v_code: vCode.value, total: total.value })
    .then((data) => {
      const types = { fixed: " KWD", percentage: "%" };
      form.value.v_code = vCode.value;
      vCode.value = "";
      discountRate.value =
        parseInt(data.data.discount_rate) + types[data.data.discount_type];
      discountType.value = data.data.discount_type;
      toast.success(data.data.message);
      voucherLoading.value = false;
    })
    .catch((err) => {
      toast.error(err.response.data.message);
      voucherLoading.value = false;
    });
};

const totalAfterDiscount = computed(() => {
  if (discountType.value == "fixed") {
    newTotal.value = parseInt(total.value - parseInt(discountRate.value));
    
  } else if (discountType.value == "percentage") {

    newTotal.value = parseInt(total.value) - (parseInt(total.value) * (parseInt(discountRate.value)) / 100);
  } else if (discountType.value == "free_delivery") {
  }
  return newTotal.value + (form.value.delivery_cost ?? 0) ;
});

const addProduct = () => {
  const product = selectedProduct.value;
  if (orderProducts.value.includes(product)) {
    form.value.products.find(
      (item) => item.product_id === product.id,
    ).quantity =
      parseInt(
        form.value.products.find((item) => item.product_id === product.id)
          .quantity,
      ) + parseInt(productCount.value);
    let item = orderProducts.value.find((item) => item == product);
    item.quantity = parseInt(item.quantity) + parseInt(productCount.value);
    item.total = item.total + productCount.value * product.price;
    total.value += productCount.value * product.price;
    if (product.has_note == 1) {
      form.value.products
        .find((p) => p.product_id == product.id)
        .notes.push("");
    }
  } else {
    if (product.has_image == 1 && product.has_note == 1) {
      form.value.products.push({
        product_id: product.id,
        quantity: parseInt(productCount.value),
        images: [],
        notes: [],
      });
      for (let i = 0; i < productCount.value; i++) {
        form.value.products.find((p) => p.product_id == product.id).notes[i] =
          "";
      }
      product.images = 0;
      imageErrors.value.push({ product_id: product.id });
    } else if (product.has_image == 1 && product.has_note == 0) {
      form.value.products.push({
        product_id: product.id,
        quantity: parseInt(productCount.value),
        images: [],
      });
      product.images = 0;
      imageErrors.value.push({ product_id: product.id });
    } else if (product.has_image == 0 && product.has_note == 1) {
      form.value.products.push({
        product_id: product.id,
        quantity: parseInt(productCount.value),
        notes: [],
      });
      for (let i = 0; i < productCount.value; i++) {
        form.value.products.find((p) => p.product_id == product.id).notes[i] =
          "";
      }
    } else {
      form.value.products.push({
        product_id: product.id,
        quantity: parseInt(productCount.value),
      });
    }
    product.quantity = productCount.value;
    total.value += product.price * productCount.value;
    product.total = product.price * productCount.value;
    orderProducts.value.push(product);
  }
  selectedProduct.value = null;
  productCount.value = 1;
};

const _updateBranches = () => {
  const date = new Date();
  form.value.delivery_time = null;
    if (form.value.is_pickup === false) {
      form.value.delivery_date = null;
      form.value.delivery_time = null;
    }
    if (
      form.value.is_pickup === true &&
      (form.value.address_address_area == null ||
        form.value.address_address_area == "")
    ) {
      // form.value.branch_id = null;
      availableBranches.value = branches.value.filter(
        (branch) => branch.id === 2
      );
    } else if (
      form.value.delivery_date !== formatDate(date) &&
      form.value.is_pickup === true
    ) {
      availableBranches.value = branches.value.filter(
        (branch) => branch.id === 2
      );
      form.value.branch_id = 2;
    } else if (form.value.delivery_date == formatDate(date)) {

      const filteredBranches = branches.value.filter((branch) => {
        const foundArea = branch.areas.find(
          (area) => area.name === form.value.address_address_area,
        );
        return foundArea !== undefined;
      });
      if(!filteredBranches.find(branch => branch.id == form.value.branch_id)){
        form.value.branch_id = null;
      };
      availableBranches.value = filteredBranches;
    } else if (
      form.value.is_pickup === false &&
      form.value.address_address_area !== null &&
      form.value.address_address_area !== ""
    ) {
      const filteredBranches = branches.value.filter((branch) => {
        const foundArea = branch.areas.find(
          (area) => area.name === form.value.address_address_area,
        );
        return foundArea !== undefined;
      });
      if(!filteredBranches.find(branch => branch.id == form.value.branch_id)){
        form.value.branch_id = null;
      };
      availableBranches.value = filteredBranches;
  }
};

const updateStartEndTime = () => {
  const branch = availableBranches.value.find(
    (branch) => branch.id === form.value.branch_id);

    // endTime.value = branch?.end;
    // startTime.value = new Date().toTimeString().slice(0, 5);
    // branchStart.value = new Date().toTimeString().slice(0, 5);

    timeKey.value += 1;

    _updateTime();
}

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

const _updateTime = () => {
  const date = new Date();
  const today = date.toISOString();
  _updateBranches()

  const branch = availableBranches.value.find(branch => branch.id == form.value.branch_id);
  if (form.value.delivery_date == formatDate(date)) {
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const [startHour, startMinute] = branchStart.value.split(':')?.map(Number);
    const [endHour, endMinute] = branchEnd.value.split(':')?.map(Number);
    if (
      (currentHour > endHour || (currentHour === endHour && currentMinute >= endMinute))
        // (currentHour < startHour || (currentHour === startHour && currentMinute < startMinute))
        ) {
          isClosed.value = true;
        } else {
          if(currentHour < startHour || (currentHour === startHour && currentMinute < startMinute)){
            branchStart.value = branchStartBackup.value;
          }else{
            const _date = new Date(new Date().setMinutes(new Date().getMinutes() + Number(40)));
            const _currentHour = _date.getHours();
            const _currentMinute = _date.getMinutes();
            const [_startHour, _startMinute] = branchStart.value.split(':')?.map(Number);
            const [_endHour, _endMinute] = branchEnd.value.split(':')?.map(Number);
            if(_currentHour > _endHour || (_currentHour === _endHour && _currentMinute >= _endMinute)){
              isClosed.value = true;
            }else{
              branchStart.value = new Date(new Date().setMinutes(new Date().getMinutes() + Number(40))).toTimeString().slice(0, 5);
            }
          }
        }
  } else {
    isClosed.value = false;
    branchStart.value = branchStartBackup.value;

    let menuType;
    let currentDate = new Date();
    let startTime = new Date(currentDate);
    startTime.setHours(0, 0, 0, 0); // Set to 12:00 AM
    let endTime = new Date(currentDate);
    endTime.setHours(4, 55, 0, 0); // Set to 4:55 AM
    if((currentDate.getDate() !== currentDay.value) || (currentDate >= startTime && currentDate <= endTime)){
        menuType = "menuType=pre-order";
        if (userRole == "admin") {
          _getProducts(menuType);
        } else if (userRole == "restaurant") {
          _getRestaurantProducts(menuType);
        }
      }
    }

  timeKey.value += 1;
  form.value.delivery_time = null;
};

const addDetails = () => {
  const address = customerAddresses.value;
  form.value.address_apartment = address?.apartment;
  form.value.block_no = address?.block_no;
  form.value.address_building_no = address?.building_num;
  form.value.address_floor = address?.floor;
  form.value.address_street_name = address?.street_name;
  form.value.address_address_area = address?.area_name;
  form.value.address_phone = customerPhone.value;
  addressDialog.value = false;
};

const deleteProduct = (product) => {
  total.value = total.value - product.price * product.quantity;
  orderProducts.value.splice(orderProducts.value.indexOf(product), 1);
  form.value.products.splice(
    form.value.products.indexOf(
      form.value.products.find((p) => p.product_id == product.id),
    ),
    1,
  );
  if (product.has_image == 1) {
    imageErrors.value.splice(
      imageErrors.value.indexOf(
        imageErrors.value.find((p) => p.product_id == product.id),
      ),
      1,
    );
  }
};

const _createOrder = async () => {
  if (form.value.is_pickup === false) {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const [startHour, startMinute] = branchStartBackup.value.split(':')?.map(Number);
    const [endHour, endMinute] = branchEnd.value.split(':')?.map(Number);
    if (
        (currentHour > endHour || (currentHour === endHour && currentMinute >= endMinute)) || (currentHour < startHour || (currentHour === startHour && currentMinute < startMinute))
    )
  {
    return toast.error("The Branch is currently closed.")
  }
}
  
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
  if (isValid) {
  let formData = new FormData();
  formData.append("branch_id", form.value.branch_id);
  formData.append("is_pickup", form.value.is_pickup);
  formData.append("email", form.value.email);
  formData.append("name", form.value.name);
  formData.append("agent", form.value.agent);
  formData.append("address_city", form.value.address_city);
  if (form.value.delivery_date !== null) {
    formData.append(
      "delivery_date",
      form.value.delivery_date + " " + form.value.delivery_time + ":00",
    );
  }
  if (form.value.delivery_time !== null) {
    formData.append("delivery_time", form.value.delivery_time);
  }
  formData.append("delivery_cost", form.value.delivery_cost);
  formData.append("address_building_no", form.value.address_building_no);
  formData.append("block_no", form.value.block_no);
  formData.append("address_floor", form.value.address_floor);
  formData.append("address_phone", form.value.address_phone);
  formData.append("address_apartment", form.value.address_apartment);
  formData.append("address_address_area", form.value.address_address_area);
  formData.append("address_street_name", form.value.address_street_name);
  formData.append("v_code", form.value.v_code);
  formData.append("employee_code", form.value.employee_code);
  // formData.append("extra_flavors", form.value.extra);
  // formData.append("flavor", form.value.flavor);

  form.value.products.forEach((product, index) => {
    formData.append(`products[${index}][product_id]`, product.product_id);
    formData.append(`products[${index}][quantity]`, product.quantity);
    product.images?.forEach((image, img_index) => {
      formData.append(`products[${index}][images][${img_index}]`, image.file);
    });
    product.notes?.forEach((note, nt_index) => {
      formData.append(`products[${index}][notes][${nt_index}]`, note);
    });
    let i = 0;
    product.extra?.filter(extra => extra !== "").forEach((extra, ext_index) => {
      formData.append(`products[${index}][extra_flavors][${ext_index}]`, extra);
      i++;
    }); 
    product.flavor?.filter(flavor => flavor !== "").forEach((flavor, flv_index) => {
      formData.append(`products[${index}][extra_flavors][${flv_index}]`, flavor);
      i++;
    });
  });

      if (imageErrors.value.length > 0)
        return toast.error(
          "You must pick at least the min. number of Images for each Product",
        );
      if (form.value.products.length == 0)
        return toast.error("You need to select at least 1 product");
      if (total.value < 5)
      return toast.error("The Total Cost Without The Delivery Cost Must Be More Than 5 KWD");
      loading.value = true;
      try {
        if (userRole == "admin") {
          await createOrder(formData);
        } else if (userRole == "restaurant") {
          await createRestaurantOrder(formData);
        }
        toast.success("Order created successfully");
        router.push({ name: "orders" });
        loading.value = false;
      } catch (err) {
        console.log(err);
        loading.value = false;
      }
    }
  });
};

const _checkEmployee = () => {
  employeeLoading.value = true;
  checkEmployee({ employee_code: employeeCode.value })
    .then(({ data }) => {
      const types = { fixed: " KWD", percentage: "%" };
      toast.success(data.meesage);
      discountRate.value =
        parseInt(data.discount_rate) + types[data.discount_type];
      discountType.value = data.discount_type;
      form.value.employee_code = employeeCode.value;
    })
    .catch(({ response }) => {
      toast.error(response.data.message);
    })
    .finally(() => {
      employeeLoading.value = false;
    });
};

const _checkRestaurantEmployee = () => {
  employeeLoading.value = true;
  checkRestaurantEmployee({ employee_code: employeeCode.value })
    .then(({ data }) => {
      const types = { fixed: " KWD", percentage: "%" };
      toast.success(data.meesage);
      discountRate.value =
        parseInt(data.discount_rate) + types[data.discount_type];
      discountType.value = data.discount_type;
      form.value.employee_code = employeeCode.value;
    })
    .catch(({ response }) => {
      toast.error(response.data.message);
    })
    .finally(() => {
      employeeLoading.value = false;
    });
};

const reset = () => {
  discountRate.value = "";
  discountType.value = "";
  employeeCode.value = "";
  vCode.value = "";
  form.value.v_code = "";
  form.value.employee_code = "";
};

const currentProduct = ref();

const addImage = (product) => {
  imageDialog.value = true;
  currentProduct.value = product.id;
};

const addExtraFlavors = (product) => {
  ExtraFlavorsDialog.value = true;
  currentProduct.value = product.id;
  form.value.extra = form.value.products.find(product => product.product_id == product.id)?.extras.map(extra => extra.id);
  form.value.flavor = form.value.products.find(product => product.product_id == product.id)?.flavors.map(flavor => flavor.id);
}

const addNote = (product) => {
  noteDialog.value = true;
  currentProduct.value = product;
};

const addFile = async (file) => {
  let orderProduct = orderProducts.value.find(
    (product) => product.id == currentProduct.value,
  );
  let productImages = form.value.products
    .find((product) => product.product_id == currentProduct.value);
  const img = { file: file.target.files[0], id: productImages.images.length, binary: "" };
  await toBase64(img.file).then((base64) => {
    img.binary = base64;
  });
  productImages.images.push(img);
  orderProduct.images += 1;

  if (orderProduct.images == orderProduct.quantity) {
    imageErrors.value.splice(
      imageErrors.value.indexOf(
        imageErrors.value.find(
          (product) => product.product_id == currentProduct.value.product_id,
        ),
      ),
    );
  }

  file.target.value = "";
};

const deleteImage = (image) => {
  let product = form.value.products.find(
    (product) => product.product_id == currentProduct.value,
  );
  let orderProduct = orderProducts.value.find(
    (product) => product.id == currentProduct.value,
  );
  orderProduct.images -= 1;

  if (orderProduct.images == orderProduct.quantity) {
    imageErrors.value.splice(
      imageErrors.value.indexOf(
        imageErrors.value.find(
          (product) => product.product_id == currentProduct.value,
        ),
      ),
    );
  } else {
    if (!imageErrors.value.map((p) => p.product_id).includes(orderProduct.id)) {
      imageErrors.value.push({ product_id: orderProduct.id });
    }
  }
  product.images.splice(product.images.indexOf(image), 1);
};

const currentProductExtras = computed(() => {
  return products.value.find(product => product.id == currentProduct.value).extras;
})

const currentProductFlavors = computed(() => {
  return products.value.find(product => product.id == currentProduct.value).flavors;
})


const addExtrasFlavors = () => {
  let product = form.value.products.find(
    (product) => product.product_id == currentProduct.value,
  );

  product.extra = form.value.extra;
  product.flavor = form.value.flavor;

  ExtraFlavorsDialog.value = false
}

const currentDay = ref(new Date().toISOString());
onMounted(() => {
  if (userRole == "admin") {
    _getBranches();
    _getProducts();
    _getAreas();
    _getServiceCost();
  } else if (userRole == "restaurant") {
    _getRestaurantProducts();
    _getRestaurantAreas();
    _getRestaurantBranches();
    _getRestaurantServiceCost();
  }

  let interval = setInterval(() => {
    today.value = new Date().toISOString();
    if(new Date(currentDay.value).getDate() !== new Date(today.value).getDate()){
      currentDay.value = today.value;
      dateKey.value = dateKey.value * 2;
    }
  }, 1000)

  onBeforeUnmount(() =>{
    clearInterval(interval);
  })
});

</script>
<template>
  <div>
    <!-- <VDialog v-model="addressDialog" persistent class="v-dialog-sm">
      Dialog Content
    <VCard title="Pick an Address for the Customer">
      <VCardText>
        <VRadioGroup v-model="selectedAddress">
          <VRadio
            class="text-h2"
            v-for="address in customerAddresses"
            :key="address.id"
            :label="`${address.area_name} ~ ${address.street_name}`"
            :value="address.id"
          />
        </VRadioGroup>
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn :loading="dialogLoading" :disabled="!selectedAddress" @click="addDetails">
          Pick
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog> -->

    <VDialog v-model="noteDialog" persistent class="v-dialog-sm">
      <!-- <DialogCloseBtn @click="noteDialog = !noteDialog" /> -->
      <VCard :title="$t('Products Notes')">
        <VCardText
          v-for="(note, index) in form.products.find((product) => product.product_id == currentProduct.id).notes"
          class="pt-2">
          <AppTextField
            :label="`Note #${index + 1}`"
            class="flex-grow-1"
            v-model="form.products.find((product) => product.product_id == currentProduct.id).notes[index]"
          />
        </VCardText>
        <VCardText class="d-flex justify-end gap-3 flex-wrap">
          <VBtn @click="noteDialog = false"> {{ $t("Save") }} </VBtn>
        </VCardText>
      </VCard>
    </VDialog>

    <VDialog v-model="imageDialog" persistent class="v-dialog-sm">
      <DialogCloseBtn @click="imageDialog = !imageDialog" />
      <VCard title="Product Images">
        <VCardText
          class="d-flex flex-row align-center px-0 pb-5 pt-0 flex-wrap px-5"
        >
          <div
            :style="
              form.products.find(
                (product) => product.product_id == currentProduct,
              ).images.length == form.products.find(
                (product) => product.product_id == currentProduct,
              ).quantity * 10
                ? 'pointer-events: none;'
                : ''
            "
            style="width: 120px; height: 120px; border: 2px solid lightgrey"
            class="add_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"
          >
            <VIcon class="position-absolute" icon="tabler-plus" />
            <input
              @change="addFile"
              type="file"
              name="file"
              style="opacity: 0; height: 100%"
              class="h-100"
              multiple
              accept="image/png, image/gif, image/jpeg"
              :disabled="
                form.products.find(
                  (product) => product.product_id == currentProduct,
                ).images.length ==
                form.products.find(
                  (product) => product.product_id == currentProduct,
                ).quantity *
                  10
              "
            />
          </div>
          <div
            v-for="image in form.products.find(
              (product) => product.product_id == currentProduct,
            ).images"
            style="width: 120px; height: 120px; border: 2px solid lightgrey"
            class="product_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"
          >
            <VBtn
              size="33"
              color="error"
              class="delete_btn position-absolute px-1 py-1"
              ><VIcon icon="tabler-trash" size="22" @click="deleteImage(image)"
            /></VBtn>
            <div class="w-100 h-100" style="overflow: hidden">
              <img
                :src="image.binary"
                style="object-fit: cover"
                class="w-100 h-100"
                alt="product_image"
              />
            </div>
          </div>
        </VCardText>
      </VCard>
    </VDialog>
    <VDialog v-model="ExtraFlavorsDialog" persistent class="v-dialog-sm">
      <DialogCloseBtn @click="ExtraFlavorsDialog = false" />

      <VCard title="Additional Options">
        <VCardText>
          <VRow>
            <VCol>
                <VSelect
                  prepend-inner-icon="tabler-building-store"
                  placeholder="Flavor"
                  :label="$t('Flavor')"
                  v-model="form.flavor"
                  :items="products.find(product => product.id == currentProduct).flavors"
                  item-value="id"
                  item-title="name"
                  variant="outlined"
                  :return-object="false"
                  class="flex-grow-1 my-1 mx-2"
                />
            </VCol>
            <VCol>
              <VSelect
                prepend-inner-icon="tabler-package"
                v-model="form.extra"
                item-title="name"
                :items="products.find(product => product.id == currentProduct).extras"
                item-value="id"
                variant="outlined"
                :label="$t('Extra')"
                :return-object="false"
                class="flex-grow-1 my-1 mx-2"
                multiple
              />
            </VCol>
          </VRow>
        </VCardText>

        <VCardText class="d-flex justify-end gap-3 flex-wrap">
          <VBtn @click="addExtrasFlavors()"> Confirm </VBtn>
        </VCardText>
      </VCard>
    </VDialog>

    <VRow class="mt-4 px-2" justify="space-around">
      <VForm ref="refVForm" @submit.prevent="_createOrder" class="w-100 d-flex">
        <VCol class="pt-0" :cols="$vuetify.display.smAndDown ? 12 : 8">
          <p class="text-h4 pt-3 pb-2">{{ $t('Create Order') }}</p>
          <VForm
            ref="phoneForm"
            v-if="userRole == 'admin'"
            @submit.prevent="_getCustomer"
          >
            <VCol
              class="px-5 rounded pb-7"
              style="background-color: rgb(var(--v-theme-surface))"
            >
              <p class="text-h4 pt-3">{{ $t('Search by Phone Number') }}</p>
              <VCol>
                <VRow justify="space-between" align="start">
                  <AppTextField
                    :rules="[
                      requiredValidator,
                      integerValidator,
                      kuwaitValidator,
                    ]"
                    :min="1"
                    prepend-inner-icon="tabler-phone"
                    style="width: 100%"
                    class="pe-3 flex-grow-1"
                    v-model="customerPhone"
                    :placeholder="t('Phone Number')"
                  >
                  </AppTextField>
                  <VBtn
                    type="submit"
                    :disabled="!customerPhone"
                    :loading="searchLoading"
                    >{{ $t('Search') }}</VBtn
                  >
                </VRow>
              </VCol>
            </VCol>
          </VForm>

          <VForm
            ref="phoneForm"
            v-if="userRole == 'restaurant'"
            @submit.prevent="_getRestaurantCustomer"
          >
            <VCol
              class="px-5 rounded pb-7"
              style="background-color: rgb(var(--v-theme-surface))"
            >
              <p class="text-h4 pt-3">{{ $t('Search by Phone Number') }}</p>
              <VCol>
                <VRow justify="space-between" align="start">
                  <AppTextField
                    :rules="[
                      requiredValidator,
                      integerValidator,
                      kuwaitValidator,
                    ]"
                    :min="1"
                    prepend-inner-icon="tabler-phone"
                    style="width: 100%"
                    class="pe-3 flex-grow-1"
                    v-model="customerPhone"
                    :placeholder="t('Phone Number')"
                  >
                  </AppTextField>
                  <VBtn
                    type="submit"
                    :disabled="!customerPhone"
                    :loading="searchLoading"
                    >{{ $t('Search') }}</VBtn
                  >
                </VRow>
              </VCol>
            </VCol>
          </VForm>
          <VCol
            v-if="userRole == 'admin' || userRole == 'restaurant'"
            class="mt-7 px-5 rounded pb-10"
            style="background-color: rgb(var(--v-theme-surface))"
          >
            <VRow class="mx-0 my-0 py-0 px-0" align="center" justify="space-between">
              <p class="text-h4 pt-3 mb-5">{{ $t('Order Scheduling') }}</p>
              <VChip v-if="isClosed && form.is_pickup" size="large" label color="error" class="text-h6" height="200" prepend-icon="tabler-info-circle">The Branch is currently Closed</VChip>
            </VRow>
            <VCol>
              <VRow
                justify="space-between"
                align="center"
                :class="!$vuetify.display.smAndDown ? 'flex-nowrap' : ''"
              >
                <div v-if="form.is_pickup" class="w-100 flex-grow-1 d-flex">
                  <AppDateTimePicker
                    :rules="[requiredValidator]"
                    :disabled="!form.is_pickup"
                    prepend-inner-icon="tabler-calendar"
                    v-model="form.delivery_date"
                    :placeholder="$t('Choose Date')"
                    class="flex-grow-1 mx-2 my-1"
                    :config="{ minDate: today }"
                    :key="dateKey"
                    @update:model-value="updateStartEndTime"
                  />
                  <AppDateTimePicker
                    :rules="[requiredValidator]"
                    :disabled="!form.is_pickup || isClosed || isBranchSelected"
                    prepend-inner-icon="tabler-clock"
                    v-model="form.delivery_time"
                    :placeholder="$t('Enter your time')"
                    class="flex-grow-1 mx-2 my-1"
                    :key="timeKey"
                    :config="{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H:i',
                      minTime: branchStart,
                      maxTime: branchEnd,
                    }"
                  />
                </div>
                <div v-if="!form.is_pickup" class="w-100 flex-grow-1 d-flex">
                  <AppDateTimePicker
                    :disabled="!form.is_pickup"
                    prepend-inner-icon="tabler-calendar"
                    v-model="form.delivery_date"
                    :placeholder="t('Choose Date')"
                    class="flex-grow-1 mx-2 my-1"
                    :config="{ minDate: today }"
                    :key="dateKey"
                    @update:model-value="updateStartEndTime"
                  />
                  <AppDateTimePicker
                    :disabled="!form.is_pickup || isClosed"
                    prepend-inner-icon="tabler-clock"
                    v-model="form.delivery_time"
                    :placeholder="t('Enter your time')"
                    class="flex-grow-1 mx-2 my-1"
                    :key="timeKey"
                    :config="{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H:i',
                      minTime: branchStart,
                      maxTime: branchEnd,
                    }"
                  />
                </div>
                <VRow
                  class="w-50 mx-2 my-0"
                  :justify="$vuetify.display.smAndDown ? 'center' : 'start'"
                >
                  <VSwitch
                    v-model="form.is_pickup"
                    :false-value="false"
                    :true-value="true"
                    :inset="false"
                    :label="t('Schedule Order')"
                    @update:model-value="_updateBranches"
                  />
                </VRow>
              </VRow>
          </VCol>
          <VRow class="mx-0 my-0 py-0 px-0" align="center" justify="space-between">
              <p class="text-h4 pt-3 mb-5">{{ $t('Area & Branch') }}</p>
              <VChip v-if="isClosed && form.is_pickup" size="large" label color="error" class="text-h6" height="200" prepend-icon="tabler-info-circle">The Branch is currently Closed</VChip>
            </VRow>
            <VCol>
              <VRow
                justify="space-between"
                align="center"
                :class="!$vuetify.display.smAndDown ? 'flex-nowrap' : ''"
              >
              <VCol cols="6" class="ma-0 py-0 pe-0 pe-2">
                <VCombobox
                  v-if="userRole == 'admin'"
                  clearable
                  prepend-inner-icon="tabler-building-community"
                  :loading="areasLoading"
                  v-model="form.address_address_area"
                  :return-object="false"
                  :items="areas"
                  item-value="name"
                  item-title="name"
                  style="width: 100%"
                  variant="outlined"
                  :rules="[requiredValidator]"
                  :label="$t('Area')"
                  class="flex-grow-1 my-1 w-100"
                  @update:model-value="updateStartEndTime()"
                />
                <VCombobox
                  v-if="userRole == 'restaurant'"
                  clearable
                  prepend-inner-icon="tabler-building-community"
                  :loading="areasLoading"
                  v-model="form.address_address_area"
                  :items="areas"
                  item-value="name"
                  item-title="name"
                  :return-object="false"
                  style="width: 100%"
                  variant="outlined"
                  :rules="[requiredValidator]"
                  :label="($t('Area'))"
                  class="flex-grow-1 my-1 w-100"
                  @update:model-value="updateStartEndTime()"
  />
              </VCol>
              <VCol cols="6" class="ma-0 py-0 pe-0 ps-2">
                <VSelect
                  clearable
                  prepend-inner-icon="tabler-building-store"
                  placeholder="Select a Branch"
                  :rules="[requiredValidator]"
                  :label="$t('Branch')"
                  :loading="branchesLoading"
                  v-model="form.branch_id"
                  :items="availableBranches"
                  item-value="id"
                  :item-title="langIdentifier"
                  style="width: 100%"
                  variant="outlined"
                  :return-object="false"
                  :disabled="!form.address_address_area || form.address_address_area == ''"
                  @update:model-value="updateStartEndTime"
                  class="w-100 flex-grow-1"
                />
              </VCol>
              </VRow>
              </VCol>
            </VCol>
          <VCol
            class="mt-7 px-5 rounded pb-10"
            style="background-color: rgb(var(--v-theme-surface))"
          >
            <p class="text-h4 pt-3 mb-0">{{ $t('Products') }}</p>
            <VCol>
              <VRow justify="space-between" align="end">
                <VCombobox
                  :disabled="!form.branch_id || (!form.delivery_date && form.is_pickup)"
                  prepend-inner-icon="tabler-package"
                  :loading="productsLoading"
                  v-model="selectedProduct"
                  :items="products"
                  item-title="name_en"
                  item-value="id"
                  style="width: 100%"
                  variant="outlined"
                  :label="$t('Products')"
                  class="flex-grow-1 my-1 w-50 mx-2"
                />
                <AppTextField
                  :disabled="!form.branch_id || (!String(form.delivery_date).length && form.is_pickup)"
                  :label="$t('Quantity')"
                  type="number"
                  class="flex-grow-1 mx-2 my-1 w-25"
                  v-model="productCount"
                ></AppTextField>
                <VBtn
                  prepend-icon="tabler-plus"
                  class="flex-grow-1 mx-2 my-1"
                  :disabled="productCount <= 0 || !selectedProduct"
                  @click="addProduct"
                  >{{ $t('Add') }}</VBtn
                >
              </VRow>
              <VRow align="center">
                <OrderProducts
                  :items="orderProducts"
                  v-if="orderProducts.length"
                  @delete="deleteProduct"
                  @add-image="addImage"
                  @add-note="addNote"
                  @add-extra-flavors="addExtraFlavors"
                />
              </VRow>
            </VCol>
          </VCol>

          <VCol
            class="mt-7 px-5 rounded pb-10"
            style="background-color: rgb(var(--v-theme-surface))"
          >
            <p class="text-h4 pt-3 mb-4">{{ $t('User Details') }}</p>
            <VCol>
              <VRow justify="space-between" align="end">
                <AppTextField
                  prepend-inner-icon="tabler-user"
                  :label="$t('Name')"
                  :rules="[requiredValidator]"
                  :placeholder="$t('Customer Name')"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.name"
                ></AppTextField>
                <AppTextField
                  prepend-inner-icon="tabler-at"
                  :label="$t('Email')"
                  :placeholder="$t('Customer Email')"
                  :rules="[emailValidator, requiredValidator]"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.email"
                ></AppTextField>
              </VRow>
              <VRow justify="space-between" align="end" class="mt-6">
                <AppTextField
                  prepend-inner-icon="tabler-phone"
                  :placeholder="$t('Customer Phone Number')"
                  :label="$t('Phone Number')"
                  :rules="[
                    integerValidator,
                    requiredValidator,
                    kuwaitValidator,
                  ]"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.address_phone"
                ></AppTextField>
                <AppTextField
                  v-if="userRole == 'admin'"
                  prepend-inner-icon="tabler-user-check"
                  :label="$t('Agent')"
                  :placeholder="$t('Agent')"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.agent"
                ></AppTextField>
              </VRow>
            </VCol>
          </VCol>

          <VCol
            class="mt-7 px-5 rounded pb-10"
            style="background-color: rgb(var(--v-theme-surface))"
          >
            <p class="text-h4 pt-3 mb-1">{{ $t('User Address') }}</p>
            <VCol>
              <VRow justify="space-between" align="end">
                <AppTextField
                  prepend-inner-icon="tabler-container"
                  :label="$t('Building Number')"
                  :rules="[requiredValidator]"
                  :placeholder="$t('Building Number')"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.address_building_no"
                ></AppTextField>
                <AppTextField
                  prepend-inner-icon="tabler-stairs"
                  :placeholder="$t('Floor')"
                  :label="$t('Floor')"
                  :rules="[requiredValidator]"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.address_floor"
                ></AppTextField>
              </VRow>
              <VRow justify="space-between" align="end" class="mt-6">
                <AppTextField
                  prepend-inner-icon="tabler-window"
                  :label="$t('Apartment')"
                  :rules="[requiredValidator]"
                  :placeholder="$t('Apartment')"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.address_apartment"
                ></AppTextField>
                <AppTextField
                  prepend-inner-icon="tabler-road"
                  :placeholder="$t('Street Name')"
                  :rules="[requiredValidator]"
                  :label="$t('Street Name')"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.address_street_name"
                ></AppTextField>
              </VRow>
              <VRow justify="space-between" align="end" class="mt-6">
                <AppTextField
                  prepend-inner-icon="tabler-number"
                  :rules="[requiredValidator]"
                  :label="$t('Block Number')"
                  :placeholder="$t('Block Number')"
                  class="flex-grow-1 mx-2 my-1"
                  v-model="form.block_no"
                ></AppTextField>
              </VRow>
            </VCol>
          </VCol>
        </VCol>

        <VCol class="pt-0" :cols="$vuetify.display.smAndDown ? 12 : 4">
          <VCol
            class="mt-16 px-5 rounded pb-10 w-100 mx-auto"
            style="background-color: rgb(var(--v-theme-surface))"
          >
            <p class="text-h4 pt-3 mb-5">{{ $t('Order Summary') }}</p>
            <VCol class="pt-0">
              <!-- <VRow justify="space-between" align="center">
                <VSelect
                  clearable
                  prepend-inner-icon="tabler-building-store"
                  placeholder="Select a Branch"
                  :rules="[requiredValidator]"
                  :label="$t('Branch')"
                  :loading="branchesLoading"
                  v-model="form.branch_id"
                  :items="availableBranches"
                  item-value="id"
                  :item-title="langIdentifier"
                  style="width: 100%"
                  variant="outlined"
                  :return-object="false"
                  :disabled="!form.address_address_area || form.address_address_area == ''"
                  @update:model-value="updateStartEndTime"
                />
              </VRow> -->
              <VRow class="mt-0">
                <VCol class="w-100 px-0 pt-0">
                  <AppTextField
                    v-if="isAnEmployee"
                    class="w-100 flex-grow-1"
                    prepend-inner-icon="tabler-user-star"
                    :placeholder="$t('Enter Employee code')"
                    v-model="employeeCode"
                    style="width: 100%"
                    variant="outlined"
                  />
                  <AppTextField
                    v-if="!isAnEmployee"
                    class="w-100 flex-grow-1"
                    prepend-inner-icon="tabler-gift"
                    :placeholder="$t('Have a Voucher?')"
                    v-model="vCode"
                    style="width: 100%"
                    variant="outlined"
                  />
                  <VCheckbox
                    @click="reset"
                    :label="$t('Is An Employee')"
                    v-model="isAnEmployee"
                    class="mt-2"
                  />
                  <VBtn
                    v-if="!isAnEmployee && userRole == 'admin'"
                    class="mt-3"
                    :disabled="!vCode"
                    block
                    :loading="voucherLoading"
                    @click="_getVoucher"
                    >{{ $t('Apply Voucher') }}</VBtn
                  >

                  <VBtn
                    v-if="!isAnEmployee && userRole == 'restaurant'"
                    class="mt-3"
                    :disabled="!vCode"
                    block
                    :loading="voucherLoading"
                    @click="_getRestaurantVoucher"
                    >{{ $t('Apply Voucher') }}</VBtn
                  >

                  <VBtn
                    v-if="isAnEmployee && userRole == 'admin'"
                    class="mt-3"
                    :disabled="!employeeCode"
                    block
                    :loading="employeeLoading"
                    @click="_checkEmployee"
                    >{{ $t('Check Employee') }}</VBtn
                  >

                  <VBtn
                    v-if="isAnEmployee && userRole == 'restaurant'"
                    class="mt-3"
                    :disabled="!employeeCode"
                    block
                    :loading="employeeLoading"
                    @click="_checkRestaurantEmployee"
                    >{{ $t('Check Employee') }}</VBtn
                  >
                </VCol>
              </VRow>
              <VRow class="mt-5">
                <VCard
                  class="w-100 px-2 py-2"
                  variant="tonal"
                  :color="$vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'"
                >
                  <VCardText>
                    <VRow align="center" justify="space-between">
                      <p class="mb-2">{{ $t('Deliver Cost') }}</p>
                      <p class="mb-2">{{ form.delivery_cost }} KWD</p>
                    </VRow>
                    <VRow>
                      <VDivider
                        :color="
                          $vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'
                        "
                      ></VDivider>
                    </VRow>
                    <VRow align="center" justify="space-between" class="mt-5">
                      <p class="mb-2">Total</p>
                      <p class="mb-2">{{ Number(total + form.delivery_cost).toFixed(2) }} KWD</p>
                    </VRow>
                    <VRow v-if="form.v_code">
                      <VDivider
                        :color="
                          $vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'
                        "
                      ></VDivider>
                    </VRow>
                    <VRow
                      v-if="form.v_code || form.employee_code"
                      align="center"
                      justify="space-between"
                      class="mt-5"
                    >
                      <p class="mb-2">{{ $t('Discount rate') }}</p>
                      <p class="mb-2">{{ discountRate }}</p>
                    </VRow>
                    <VRow v-if="form.v_code || form.employee_code">
                      <VDivider
                        :color="
                          $vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'
                        "
                      ></VDivider>
                    </VRow>
                    <VRow
                      v-if="form.v_code || form.employee_code"
                      align="center"
                      justify="space-between"
                      class="mt-5"
                    >
                      <p class="mb-0">{{ $t('New Total') }}</p>
                      <p class="mb-0">{{ Number(totalAfterDiscount).toFixed(1) }} KWD</p>
                    </VRow>
                  </VCardText>
                </VCard>
              </VRow>
              <VRow class="mt-8">
                <VBtn type="submit" :loading="loading" block>{{ $t('Create Order') }}</VBtn>
              </VRow>
            </VCol>
          </VCol>
        </VCol>
      </VForm>
    </VRow>
  </div>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "restaurant"]
</route>

<style lang="scss" scoped>
.app-picker-field {
  width: 49%;
}

.add_image {
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    background-color: rgba(211, 211, 211, 0.489);
  }

  input {
    cursor: pointer;
  }
}

.product_image {
  transition: 0.3s;
  &:hover {
    img {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }
  img {
    transition: 0.3s;
  }

  .delete_btn {
    top: -10px;
    right: -10px;
    z-index: 1000;
  }
}
</style>
