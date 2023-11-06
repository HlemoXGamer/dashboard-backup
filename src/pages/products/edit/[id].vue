<script setup>
import { get as getAdminCategories } from "@/apis/admin/categories";
import {
  removeImage as removeAdminImage,
  show as showAdminProduct,
  update as updateAdminProduct,
} from "@/apis/admin/products";

import { getFlavor } from "@/apis/admin/extra-flavors";
import { getExtra } from "@/apis/admin/extra-flavors";

import { get as getMarkterCategories } from "@/apis/markter/categories";
import {
  removeImage as removeMarkterImage,
  show as showMarkterProduct,
  update as updateMarkterProduct,
} from "@/apis/markter/products";

import router from "@/router";
import { toBase64 } from "@/utils/files";
import { numericValidator, requiredValidator } from "@validators";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
const loading = ref(false);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const productId = useRoute().params.id;
const images = ref([]);
const imagesArray = ref([]);
const categories = ref([]);
const extras = ref([]);
const flavors = ref([]);
const toast = useToast();
const refVForm = ref();
const form = ref({
  code: "",
  categories: [],
  created_at: "",
  description_ar: "",
  description_en: "",
  has_image: 0,
  has_note: 0,
  id: "",
  images: "",
  in_stock: "",
  is_active: 0,
  name_ar: "",
  name_en: "",
  prep_time: "",
  price: "",
  extras: [],
  flavors: [],
  extra_quantity: 1,
  is_pre: 0,
});
const binaryImages = ref([]);

const getImage = async (file) => {
  if (file instanceof File) {
    let image = await toBase64(file);
    imagesArray.value.push({ id: null, url: image });
    binaryImages.value.push(file);
  }
};

const addImage = async () => {
  await getImage(images.value.pop());
};

const _showProduct = async () => {
  userRole == "admin"
    ? await showAdminProduct(productId).then((res) => {
        let {
          code,
          created_at,
          description_ar,
          description_en,
          categories,
          has_image,
          has_note,
          id,
          images,
          in_stock,
          is_active,
          name_ar,
          name_en,
          prep_time,
          price,
          extras,
          flavors,
          extra_quantity,
          is_pre
        } = res.data.data;

        form.value = {
          code,
          created_at,
          description_ar,
          description_en,
          has_image,
          has_note,
          id,
          images,
          in_stock,
          is_active,
          name_ar,
          name_en,
          prep_time,
          price,
          extras,
          flavors,
          extra_quantity,
          is_pre
        };
        form.value.categories = res.data.data.categories.map(
          (category) => category.id,
        );
        imagesArray.value = form.value.images;
      })
    : await showMarkterProduct(productId).then((res) => {
        let {
          code,
          created_at,
          categories,
          description_ar,
          description_en,
          has_image,
          has_note,
          id,
          images,
          in_stock,
          is_active,
          name_ar,
          name_en,
          prep_time,
          price,
          extras,
          flavors,
          extra_quantity,
          is_pre
        } = res.data.data;

        form.value = {
          code,
          categories,
          created_at,
          description_ar,
          description_en,
          has_image,
          has_note,
          id,
          images,
          in_stock,
          is_active,
          name_ar,
          name_en,
          prep_time,
          price,
          extras,
          flavors,
          extra_quantity,
          is_pre
        };

        imagesArray.value = form.value.images;
      });
};

const deleteImage = async (image) => {
  if(isURL(image.url)){
  try {
    imagesArray.value.splice(
      imagesArray.value.indexOf(image),
      1,
    );
    const { data } =
      userRole == "admin"
        ? await removeAdminImage({
            path: image.url.split("/").pop(),
            product_id: productId,
          })
        : await removeMarkterImage({
            path: image.url.split("/").pop(),
            product_id: productId,
          });
    toast.success(data.message);
  } catch (err) {
    toast.error(err.response.data.message);
  }
}else{
  imagesArray.value.splice(
      imagesArray.value.indexOf(image),
      1
    );
}
};

const _updateProduct = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;

      let formData = new FormData();
      formData.append("code", form.value.code);
      formData.append("created_at", form.value.created_at);
      formData.append("categories", form.value.categories);
      formData.append("description_ar", form.value.description_ar);
      formData.append("description_en", form.value.description_en);
      formData.append("has_image", form.value.has_image);
      formData.append("has_note", form.value.has_note);
      formData.append("id", form.value.id);
      formData.append("in_stock", form.value.in_stock);
      formData.append("is_active", form.value.is_active);
      formData.append("name_ar", form.value.name_ar);
      formData.append("name_en", form.value.name_en);
      formData.append("prep_time", form.value.prep_time);
      formData.append("price", form.value.price);

      form.value.extras.concat(form.value.flavors).forEach((extra_flavor, index) => {
        formData.append(`extra_flavors[${index}]`, extra_flavor)
      });

      formData.append("quantity", form.value.extra_quantity);

      // Append extra_flavors to the formData
 

      formData.append("is_pre", form.value.is_pre);
      binaryImages.value.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
      try {
        userRole == "admin"
          ? await updateAdminProduct(productId, formData)
          : await updateMarkterProduct(productId, formData);
        toast.success("Product updated successfully");
        loading.value = false;
        router.back();
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};
const _getCategories = () => {
  if (userRole == "admin") {
    getAdminCategories().then(({ data, meta }) => {
      categories.value = data.data;
    });
  } else if (userRole == "markter") {
    getMarkterCategories().then(({ data, meta }) => {
      categories.value = data.data;
    });
  }
};

const _getFlavors = () => {
  if (userRole == 'admin')
  {
    getFlavor().then(({ data, meta }) => {
    flavors.value = data.data;
  });
  }
};


const _getExtras = () => {
  if (userRole == 'admin')
  {
    getExtra().then(({ data, meta }) => {
    extras.value = data.data;
  });
  }
};

function isURL(data) {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(data);
}

onMounted(() => {
  _getCategories();
  _getFlavors();
  _getExtras();
  _showProduct();
});
</script>
<template>
  <VForm
    ref="refVForm"
    @submit.prevent="_updateProduct"
    class="w-100 d-flex justify-content-between"
  >
    <VRow class="mt-4 px-4" justify="space-around">
      <VCol
        cols="7"
        style="background-color: rgb(var(--v-theme-surface))"
        class="rounded pb-7"
      >
        <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Update Product') }}</p>
        <VCol class="px-5">
          <VRow justify="space-between" align="center">
            <AppTextField
              prepend-inner-icon="tabler-package"
              class="flex-grow-1 me-1"
              :rules="[requiredValidator]"
              v-model="form.name_en"
              label="Name"
            ></AppTextField>
            <AppTextField
              append-inner-icon="tabler-package"
              class="flex-grow-1 ms-1 text-right"
              :rules="[requiredValidator]"
              v-model="form.name_ar"
              label="الاسم"
              dir="rtl"
            ></AppTextField>
          </VRow>
          <VRow class="mt-10" justify="space-between" align="center">
            <AppTextarea
              class="flex-grow-1 me-1"
              :rules="[requiredValidator]"
              v-model="form.description_en"
              label="Description"
            ></AppTextarea>
            <AppTextarea
              class="flex-grow-1 ms-1 text-right"
              :rules="[requiredValidator]"
              dir="rtl"
              v-model="form.description_ar"
              label="الوصف"
            ></AppTextarea>
          </VRow>
          <VRow
            v-if="userRole == 'admin'"
            class="mt-10"
            justify="space-between"
            align="start"
          >
            <AppTextField
              prepend-inner-icon="tabler-coins"
              v-model="form.price"
              :rules="[requiredValidator, numericValidator]"
              class="flex-grow-1 mr-1"
              :label="$t('Product Price')"
            ></AppTextField>
            <VCombobox
              prepend-inner-icon="tabler-bookmark"
              multiple
              :items="categories"
              item-value="id"
              item-title="name_en"
              :return-object="false"
              :rules="[requiredValidator]"
              v-model="form.categories"
              class="flex-grow-0 ml-1 w-50 mt-6"
              :label="$t('Select Category')"
            />
          </VRow>
          <VRow
            v-if="userRole == 'admin'"
            class="mt-10 pb-10"
            justify="space-between"
            align="center"
          >
            <AppTextField
              prepend-inner-icon="tabler-dna-2"
              v-model="form.code"
              :rules="[requiredValidator]"
              class="flex-grow-1 mr-1"
              :label="$t('Product Code')"
            ></AppTextField>
            <AppTextField
              prepend-inner-icon="tabler-clock"
              v-model="form.prep_time"
              :rules="[requiredValidator]"
              class="flex-grow-1 ml-1"
              :label="$t('Preparation Time')"
            ></AppTextField>
          </VRow>
           <VRow v-if="userRole == 'admin'" class="mt-10" justify="space-between" align="center">
                <VCombobox
                  prepend-inner-icon="tabler-package"
                  multiple
                  :return-object="false"
                  :items="extras"
                  item-value="id"
                  item-title="name"
                  v-model="form.extras"
                  class="flex-grow-1 ml-1 mt-3"
                  :label="$t('Select Extra')"
                ></VCombobox>
                <VCombobox
                  prepend-inner-icon="tabler-package"
                  :return-object="false"
                  :items="flavors"
                  item-value="id"
                  item-title="name"
                  v-model="form.flavors"
                  class="flex-grow-1 ml-1 mt-3"
                  :label="$t('Select Flavor')"
                ></VCombobox>
                <AppTextField
                  prepend-inner-icon="tabler-dna-2"
                  v-model="form.extra_quantity"
                  :rules="[requiredValidator]"
                  class="flex-grow-1 ml-1 mt-3"
                  :placeholder="$t('extra_quantity')"
                ></AppTextField>
              </VRow>
        </VCol>
      </VCol>
      <VCol
        cols="4"
        style="
          background-color: rgb(var(--v-theme-surface));
          height: fit-content;
        "
        class="rounded pb-10"
      >
        <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Images') }}</p>
        <VRow>
          <VCol>
            <VRow class="px-5">
              <div v-for="image in imagesArray">
                <div class="position-relative">
                  <VIcon
                    class="position-absolute bg-red rounded px-1"
                    style="
                      width: 30px;
                      height: 30px;
                      background-color: rgb(199, 0, 0);
                      z-index: 2;
                      right: -5px;
                      top: -7px;
                    "
                    color="#fff"
                    icon="tabler-ban"
                    @click="deleteImage(image)"
                  />
                  <VImg
                    prepend-icon="tabler-camera"
                    :src="image.url"
                    width="90px"
                    style="height: 90px"
                    cover
                    class="mx-1 my-2 rounded"
                  />
                </div>
              </div>
            </VRow>
            <VFileInput
              class="px-2 mt-8"
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="tabler-camera"
              placeholder="Pick an image"
              multiple
              :label="$t('Upload image')"
              v-model="images"
              @change="addImage"
            />
          </VCol>
        </VRow>
        <VCol v-if="userRole == 'admin'" class="mt-2">
          <VSwitch
            v-model="form.is_active"
            :inset="false"
            :false-value="0"
            :true-value="1"
            :label="$t('Active')"
          />
          <VSwitch
            v-model="form.has_image"
            :inset="false"
            :false-value="0"
            :true-value="1"
            :label="$t('Need Image')"
          />
          <VSwitch
            v-model="form.has_note"
            :inset="false"
            :false-value="0"
            :true-value="1"
            :label="$t('Need Note')"
          />
          <VSwitch
            v-model="form.is_pre"
            :inset="false"
            :false-value="0"
            :true-value="1"
            :label="$t('Is Pre')"
          />
        </VCol>
        <VRow class="px-5 mt-2">
          <VBtn color="primary" :loading="loading" type="submit" block
            ><VIcon start icon="tabler-check" />{{ $t('Update') }}</VBtn
          >
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "markter"]
</route>
