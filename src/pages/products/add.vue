<script setup>

import { get as getAdminCategories } from "@/apis/admin/categories";
import { create as addAdminProduct } from "@/apis/admin/products";

import { getFlavor } from "@/apis/admin/extra-flavors";
import { getExtra } from "@/apis/admin/extra-flavors";

import { get as getMarkterCategories } from "@/apis/markter/categories";
import { create as addMarkterProduct } from "@/apis/markter/products";


import router from "@/router";
import { toBase64 } from "@/utils/files";
import { numericValidator, requiredValidator } from "@validators";
import { useToast } from "vue-toastification";
const images = ref([]);
const imagesArray = ref([]);
const toast = useToast();
const loading = ref(false);
const categories = ref([]);
const extras = ref([]);
const flavors = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const form = ref({
  code: "",
  created_at: "",
  categories: [],
  description_ar: "",
  description_en: "",
  has_image: 0,
  has_note: 0,
  images: "",
  is_active: 0,
  name_ar: "",
  name_en: "",
  prep_time: "",
  price: "",
  status: 0,
  extra: [],
  flavor: [],
  is_pre: 0,
});
const refVForm = ref();
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

const _addProduct = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;

      let formData = new FormData();
      formData.append("code", form.value.code);
      formData.append("categories", form.value.categories);
      formData.append("description_ar", form.value.description_ar);
      formData.append("description_en", form.value.description_en);
      formData.append("has_image", form.value.has_image);
      formData.append("has_note", form.value.has_note);
      formData.append("is_active", form.value.is_active);
      formData.append("name_ar", form.value.name_ar);
      formData.append("name_en", form.value.name_en);
      formData.append("prep_time", form.value.prep_time);
      formData.append("price", form.value.price);
      formData.append("status", form.value.status);
      formData.append("extra_flavors", form.value.extras.concat(form.value.flavors));
      formData.append("is_pre", form.value.is_pre);

      binaryImages.value.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
      try {
        userRole =='admin' ? await addAdminProduct(formData) : await addMarkterProduct(formData)
        toast.success("Product added successfully");
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
  if (userRole == 'admin')
  {
    getAdminCategories().then(({ data, meta }) => {
    categories.value = data.data;
  });
  }
  else if (userRole == 'markter')
  {
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

const deleteImage = async (image) => {
  const index = imagesArray.value.indexOf(
    imagesArray.value.filter((img) => img.url == image.url)[0],
  );
  if (index !== -1) {
    imagesArray.value.splice(index, 1);
  }
  binaryImages.value.forEach(async (file) => {
    if (file instanceof File) {
      await toBase64(file).then((base64) => {
        if (base64 == image.url) {
          binaryImages.value.splice(file, 1);
        }
      });
    }
  });
};

onMounted(() => {
  _getCategories();
  _getFlavors();
  _getExtras();
});

</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VForm
      ref="refVForm"
      @submit.prevent="_addProduct"
      class="w-100 d-flex justify-content-between"
    >
      <VCol cols="8" class="pt-0">
        <VCol
          class="px-5 rounded  pb-10"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Add Product') }}</p>
          <VCol class="px-5">
            <VRow justify="space-between" align="start">
              <AppTextField
                prepend-inner-icon="tabler-package"
                v-model="form.name_en"
                :rules="[requiredValidator]"
                class="flex-grow-1 mr-1"
                label="Name"
              ></AppTextField>
              <AppTextField
                append-inner-icon="tabler-package"
                v-model="form.name_ar"
                :rules="[requiredValidator]"
                class="flex-grow-1 ml-1 text-right"
                dir="rtl"
                label="الاسم"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextarea
                v-model="form.description_en"
                :rules="[requiredValidator]"
                class="flex-grow-1 mr-1"
                label="Description"
              ></AppTextarea>
              <AppTextarea
                v-model="form.description_ar"
                :rules="[requiredValidator]"
                class="flex-grow-1 ml-1 text-right"
                dir="rtl"
                label="الوصف"
              ></AppTextarea>
            </VRow>
              <VRow v-if="userRole == 'admin'" class="mt-5" justify="space-between" align="center">
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
                  :return-object="false"
                  :items="categories"
                  item-value="id"
                  item-title="name_en"
                  :rules="[requiredValidator]"
                  v-model="form.categories"
                  class="flex-grow-1 ml-1 mt-6"
                  :label="$t('Select Category')"
                ></VCombobox>
              </VRow>
              <VRow v-if="userRole == 'admin'" class="mt-10" justify="space-between" align="start">
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
                  :items="exters"
                  item-value="id"
                  item-title="name"
                  v-model="form.extra"
                  class="flex-grow-1 ml-1 mt-6"
                  :label="$t('Select Extra')"
                ></VCombobox>
                <VCombobox
                  prepend-inner-icon="tabler-package"
                  :return-object="false"
                  :items="flavors"
                  item-value="id"
                  item-title="name"
                  v-model="form.flavor"
                  class="flex-grow-1 ml-1 mt-6"
                  :label="$t('Select Flavor')"
                ></VCombobox>
              </VRow>
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
        <VCol class="mt-2" v-if="userRole == 'admin'">
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
            ><VIcon start icon="tabler-plus" />{{ $t('Add') }}</VBtn
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
