<template>
  <div>
    <AppTextField
      v-model="searchQuery"
      @keyup="updateFilteredProducts"
      :placeholder="$t('Search Product')"
    />
    <VBtn
      v-if="productsIds.length > 0"
      class="mt-5"
      style="width: 100%"
      @click="UpdateProducts"
      >{{ $t('Update') }}</VBtn
    >
    <VRow class="mt-10">
      <VCol sm="6" cols="12" v-for="item in filteredProducts">
        <VCard>
          <div class="d-flex flex-md-row justify-space-between">
            <div>
              <VCardItem>
                <VCardTitle>{{ item[langIdentifier] }}</VCardTitle>
              </VCardItem>

              <VCardText class="d-flex align-center flex-wrap text-body-1">
                <span>{{ item[langIdentifierDescription] }}</span>
              </VCardText>
            </div>

            <div class="d-flex justify-end align-center pr-6">
              <VSwitch
                v-model="item.status"
                :false-value="0"
                :true-value="1"
                @change="pushId(item.id)"
              />
            </div>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
<script setup>
import axios from "@axios";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
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

const langIdentifierDescription = computed(() => {
    if ($useI18n.locale.value === 'en') {
      return 'description_en';
    } else if ($useI18n.locale.value === 'ar') {
      return 'description_ar';
    }
});

// Toast Notification
import { useToast } from "vue-toastification";
const toast = useToast();

const items = ref([]);
const route = useRoute();
const searchQuery = ref("");
const productsIds = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const pushId = (id) => {
  productsIds.value.push(id);
};

const updateFilteredProducts = () => {
  const query = searchQuery.value.toLowerCase().trim();

  // Filter products based on the searchQuery and item.name_en
  const filtered = items.value.filter((item) =>
    item.name_en.toLowerCase().includes(query),
  );

  // Update filteredProducts with the filtered results
  filteredProducts.value = filtered;
};

const filteredProducts = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();

  // Filter products based on the searchQuery and item.name_en
  return items.value.filter((item) =>
    item.name_en.toLowerCase().includes(query),
  );
});

const FetchCategory = () => {
  // console.log(localStorage.getItem("accessToken"));
  axios
    .get(`/restaurant-apis/products?category=${route.params.id}`)
    .then((response) => {
      console.log(response.data.data);
      items.value = response.data.data;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

const UpdateProducts = () => {
  axios
    .post(`restaurant-apis/update/products`, { product_ids: productsIds.value })
    .then((response) => {
      toast.success("Updated Successfully");
      productsIds.value = [];
    })
    .catch((error) => {
      toast.success(error.message);
    });
};

onMounted(() => {
  if (userRole == "restaurant") {
    FetchCategory();
  }
});
</script>
