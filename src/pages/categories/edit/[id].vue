<script setup>

import { show as getAdminCategory, update as adminUpdate } from "@/apis/admin/categories";
import { get as getAdminProducts } from "@/apis/admin/products";

import { show as getMarkterCategory, update as markterUpdate } from "@/apis/markter/categories";
import { get as getMarkterProducts } from "@/apis/markter/products";

import router from "@/router";
import { toBase64 } from "@/utils/files";
import { useRoute } from "vue-router";
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
const categoryId = useRoute().params.id;
const loading = ref(false);
const currentTab = ref(0);
const images = ref([]);
const refVForm = ref();
const form = ref({
  is_active: 0,
  name_en: "",
  name_ar: "",
  product: [],
  image: "",
});

const selectedProducts = ref([]);
const binaryImage = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
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
  if (userRole == 'admin')
  {
    await getAdminProducts().then((res) => {
      products.value = res.data.data;
    });
  }
  else if (userRole == 'markter')
  {
    await getMarkterProducts().then((res) => {
      products.value = res.data.data;
    });
  }
};

const _addSelection = (product) => {
  if (selectedProducts.value.includes(product)) {
    selectedProducts.value = selectedProducts.value.filter(
      (id) => id !== product,
    );
  } else {
    selectedProducts.value.push(product);
  }
};

const _updateCategory = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        const formData = new FormData();
        formData.append("name_en", form.value.name_en);
        formData.append("name_ar", form.value.name_ar);
        formData.append("is_active", form.value.is_active);
        if (!selectedProducts.value) {
          formData.append("products", "");
        } else {
          formData.append("products", selectedProducts.value);
        }
        formData.append("image", form.value.image);
        if(userRole == "admin"){
          await adminUpdate(categoryId, formData);
        }else if(userRole == "markter"){
          await markterUpdate(categoryId, formData)
        }
        toast.success("Category updated successfully");
        loading.value = false;
        router.back();
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

const _showCategory = async () => {
  try {
    let data
    if(userRole == "admin"){
      data = await getAdminCategory(categoryId).then(({data}) => { return data });
      form.value.name_en = data.data.name_en;
      form.value.name_ar = data.data.name_ar;
      form.value.is_active = data.data.is_active;
      form.value.image = data.data.image;
      binaryImage.value = data.data.image;
      form.value.products = data.data.products;
    }else if(userRole == "markter"){
      data = await getMarkterCategory(categoryId).then(({data}) => { return data });
      form.value.name_en = data.data.name_en;
      form.value.name_ar = data.data.name_ar;
      form.value.is_active = data.data.is_active;
      form.value.image = data.data.image;
      binaryImage.value = data.data.image;
      form.value.products = data.data.products;
    }
    selectedProducts.value = data.data.products.map((item) => item.id);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const deleteImage = (image) => {
  form.value.image = "";
  binaryImage.value = "";
};

onMounted(() => {
  _getProducts();
  _showCategory();
});
</script>
<template>
  <VRow class="mt-4 px-1" justify="space-around">
    <VForm
      ref="refVForm"
      @submit.prevent="_updateCategory"
      class="w-100 d-flex justify-content-between"
    >
      <VCol cols="8" class="pt-0">
        <VCol
          style="background-color: rgb(var(--v-theme-surface))"
          class="rounded px-7 pt-2"
        >
          <p class="text-h4 pt-5 pb-2">{{ $t('Update Category') }}</p>
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
                v-if="selectedProducts.includes(product.id)"
                :model-value="true"
                @change="_addSelection(product.id)"
                :key="product.id"
              />
              <VCheckbox
                :label="product[langIdentifier]"
                v-else
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
                    z-index: 2;
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
              multiple
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
          <VBtn type="submit" color="primary" block :loading="loading"
            ><VIcon start icon="tabler-check" />{{ $t('Update') }}</VBtn
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
