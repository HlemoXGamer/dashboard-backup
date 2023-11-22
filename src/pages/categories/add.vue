<script setup>
import { requiredValidator } from "@/@core/utils/validators";
import { create as createAdminCategory } from "@/apis/admin/categories";
import { create as createMarkterCategory } from "@/apis/markter/categories";
import { get as getMarkterProducts } from "@/apis/markter/products";
import { get as getProducts } from "@/apis/admin/products";
import router from "@/router";
import { toBase64 } from "@/utils/files";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const langIdentifier = computed(() => {
    if ($useI18n.locale.value === 'en') {
      return 'name_en';
    } else if ($useI18n.locale.value === 'ar') {
      return 'name_ar';
    }
});

const toast = useToast();
const loading = ref(false);
const currentTab = ref(0);
const images = ref([]);
const refVForm = ref();
const form = ref({
  is_active: 0,
  name_en: "",
  name_ar: "",
  products: [],
  image: "",
});
const selectedProducts = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const binaryImage = ref([]);

const getImage = async (file) => {
  if (file instanceof File) {
    let image = await toBase64(file);
    form.value.image = file;
    binaryImage.value = image;
  }
};

const addImage = async () => {
  await getImage(images.value.pop());
};

const products = ref([]);

const _getProducts = async () => {
  await getProducts().then(({data}) => {
    products.value = data.data;
  });
};

const _getMarkterProducts = async () => {
  await getMarkterProducts().then(({data}) => {
    products.value = data.data;
  })
}

const _addSelection = (product) => {
  selectedProducts.value.push(product);
};

const _createCategory = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        const formData = new FormData();
        formData.append("name_en", form.value.name_en);
        formData.append("name_ar", form.value.name_ar);
        formData.append("is_active", form.value.is_active);
        formData.append("products", selectedProducts.value);
        formData.append(`image`, form.value.image);
        if(userRole == "admin"){
          await createAdminCategory(formData);
        }else if(userRole == "markter"){
          await createMarkterCategory(formData);
        }
        toast.success("Category created successfully");
        loading.value = false;
        router.back();
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

const deleteImage = (image) => {
  form.value.image = "";
  binaryImage.value = "";
};

onMounted(() => {
  if (userRole == "admin") {
    _getProducts();
  }else if(userRole == "markter"){
    _getMarkterProducts();
  }
});
</script>
<template>
  <VRow class="mt-4 px-1" justify="space-around">
    <VForm
      @submit.prevent="_createCategory"
      ref="refVForm"
      class="w-100 d-flex justify-content-between"
    >
      <VCol cols="8" class="pt-0">
        <VCol
          style="background-color: rgb(var(--v-theme-surface))"
          class="rounded px-7 pt-2"
        >
          <p class="text-h4 pt-5 pb-2">{{ $t('Add Category') }}</p>
          <VCol class="px-2 pt-0">
            <VTabs v-model="currentTab" class="v-tabs-pill">
              <VTab>English</VTab>
              <VTab>Arabic</VTab>
            </VTabs>
            <VCard
              class="pt-0 mt-0"
              style="background-color: transparent; box-shadow: none"
            >
              <VCardText>
                <VWindow v-model="currentTab">
                  <VWindowItem>
                    <AppTextField
                      prepend-inner-icon="tabler-writing"
                      :rules="[requiredValidator]"
                      v-model="form.name_en"
                      class="flex-grow-1 mr-1"
                      label="Name"
                    ></AppTextField>
                  </VWindowItem>
                  <VWindowItem>
                    <AppTextField
                      append-inner-icon="tabler-writing"
                      :rules="[requiredValidator]"
                      v-model="form.name_ar"
                      class="flex-grow-1 ml-1 text-right"
                      dir="rtl"
                      label="الاسم"
                    ></AppTextField>
                  </VWindowItem>
                </VWindow>
              </VCardText>
            </VCard>
          </VCol>
        </VCol>

        <VCol
          style="background-color: rgb(var(--v-theme-surface))"
          class="rounded px-7 pt-2 mt-5"
        >
          <p class="text-h4 pt-5 pb-2">{{ $t('Products') }}</p>
          <VCol class="px-2 pt-0">
            <div v-for="product in products">
              <VCheckbox
                :label="product[langIdentifier]"
                :v-model="selectedProducts"
                @change="_addSelection(product.id)"
              />
            </div>
          </VCol>
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
              <div class="position-relative" v-if="form.image">
                <VIcon
                  class="position-absolute bg-red rounded px-1"
                  style="
                    width: 30px;
                    height: 30px;
                    background-color: rgb(199, 0, 0);
                    z-index: 100;
                    right: -5px;
                    top: -7px;
                  "
                  color="#fff"
                  icon="tabler-ban"
                  @click="deleteImage()"
                />
                <VImg
                  prepend-icon="tabler-camera"
                  :src="binaryImage"
                  width="90px"
                  style="height: 90px"
                  cover
                  class="mx-1 my-2 rounded"
                />
              </div>
            </VRow>
            <VFileInput
              class="px-2 mt-8"
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="tabler-camera"
              placeholder="Pick an image"
              :label="$t('Upload image')"
              v-model="images"
              @change="addImage"
            />
          </VCol>
        </VRow>
        <VCol class="mt-2">
          <VSwitch
            v-model="form.is_active"
            :false-value="0"
            :true-value="1"
            :inset="false"
            :label="$t('Active')"
          />
        </VCol>
        <VRow class="px-5 mt-2">
          <VBtn type="submit" color="primary" :loading="loading" block
            ><VIcon start icon="tabler-plus" />{{ $t('Create') }}</VBtn
          >
        </VRow>
      </VCol>
    </VForm>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "markter"]
</route>
