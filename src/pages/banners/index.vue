<script setup>
import {
  create as createAdminBanners,
  get as getAdminBanners,
} from "@/apis/admin/banners";
import {
  create as createMarkterBanners,
  get as getMarkterBanners,
} from "@/apis/markter/banners";
import { toBase64 } from "@/utils/files";
import { onBeforeMount } from "vue";
import { useToast } from "vue-toastification";
const banners = ref([]);
const bannersModel = ref([]);
const loading = ref(false);
const bannersArray = ref([]);
const toast = useToast();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;

const getImage = async (file) => {
  if (file instanceof File) {
    let banner = await toBase64(file);
    bannersArray.value.push(banner);
    banners.value.push(file);
  }
};

const addImage = async () => {
  await getImage(bannersModel.value.pop());
};

const _getBanners = () => {
  if (userRole == 'admin')
  {
    getAdminBanners().then(({ data }) => {
    data.data.banners
      .map((banner) => banner.image)
      .forEach((image) => {
        bannersArray.value.push(image);
      });
    banners.value = data.data.banners.map((banner) => banner.image);
  });
  }
  else if (userRole == 'markter')
  {
    getMarkterBanners().then(({ data }) => {
    data.data.banners
      .map((banner) => banner.image)
      .forEach((image) => {
        bannersArray.value.push(image);
      });
    banners.value = data.data.banners.map((banner) => banner.image);
  });
  }
};

const proccessBanners = async () => {
  loading.value = true;
  let formData = new FormData();
  let i = 0;
  banners.value.forEach((banner, index) => {
    formData.append(`banners[${i}]`, banner);
    i++;
  });
  try {
    if (userRole == 'admin')
    {
      await createAdminBanners(formData)
      .then()
      .finally(() => {
        loading.value = false;
      });
    }
    else if (userRole == 'markter')
    {
      await createMarkterBanners(formData)
      .then()
      .finally(() => {
        loading.value = false;
      });
    }
    toast.success("Banners updated successfully");
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
  }
};

const deleteImage = async (banner) => {
  if (isURL(banner)) {
    const index = bannersArray.value.indexOf(banner);
    bannersArray.value.splice(index, 1);
    banners.value.splice(index, 1);
  } else {
    const fileIndex = bannersArray.value.indexOf(banner);
    if (fileIndex !== -1) {
      bannersArray.value.splice(fileIndex, 1);
      banners.value.splice(fileIndex, 1);
    } else {
      bannersArray.value.forEach(async (file, index) => {
        if (file instanceof File) {
          await toBase64(file).then((base64) => {
            if (base64 === banner) {
              bannersArray.value.splice(index, 1);
              banners.value.splice(index, 1);
            }
          });
        }
      });
    }
  }
};

function isURL(data) {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(data);
}

onBeforeMount(() => {
  _getBanners();
});
</script>
<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Banners') }}</p>
      <VCol>
        <VRow class="px-5">
          <div v-for="(banner, index) in bannersArray" class="position-relative">
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
              @click="deleteImage(banner)"
            />
            <VImg
              prepend-icon="tabler-camera"
              :src="banner"
              width="150px"
              style="height: 150px"
              cover
              class="mx-1 my-2 rounded"
            />
          </div>
        </VRow>
        <VRow align="center" class="mt-8 px-5">
          <VFileInput
            class="px-2"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="tabler-camera"
            placeholder="Pick an image"
            :label="$t('Upload image')"
            v-model="bannersModel"
            @change="addImage"
          />
          <VBtn @click="proccessBanners" :loading="loading">{{ $t('Update') }}</VBtn>
        </VRow>
      </VCol>

      <VCol class="px-5 mt-2">
        <v-carousel
          hide-delimiters
          class="rounded mt-2"
          v-if="bannersArray.length"
        >
          <v-carousel-item
            v-for="(banner, i) in bannersArray"
            :key="i"
            :src="banner"
            cover
          ></v-carousel-item>
        </v-carousel>
      </VCol>
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "markter"]
</route>
