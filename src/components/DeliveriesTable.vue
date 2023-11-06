<script setup>
import { remove as removeAdminDelivery } from "@/apis/admin/deliveries";
import { remove as removeLogisticDelivery } from "@/apis/logistics/deliveries";
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";

const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const langIdentifier = computed(() => {
    if ($useI18n.locale.value === 'en') {
      return 'branch.name_en';
    } else if ($useI18n.locale.value === 'ar') {
      return 'branch.name_ar';
    }
});

const deliveryData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
const deleteDialog = ref(false);

const headers = computed(() => [
  {
    title: t("Name"),
    key: "name",
    sortable: false,
  },
  userRole !== "restaurant" ?
  {
    title: t("Branch"),
    key: langIdentifier,
    sortable: false,
  }
  : "",
  {
    title: t("Phone Number"),
    key: "phone",
    sortable: false,
  },
  {
    title: t("Created At"),
    key: "created_at",
    sortable: false,
  },
  {
    title: t("Status"),
    key: "is_active",
    align: "center",
    sortable: false,
  },
  {
    title: t("Actions"),
    sortable: false,
    key: "actions",
  },
])

const resolveStatusVariant = (status) => {
  if (parseInt(status) !== 0) {
    return {
      color: "success",
      text: t("Active"),
    };
  } else {
    if (parseInt(status) === 0) {
      return {
        color: "secondary",
        text: t("Disabled"),
      };
    }
  }
};

let currentDeliveryData = {};
const _deleteDialog = (product) => {
  currentDeliveryData = product;
  deliveryData.value = JSON.stringify(product);
  deliveryData.value = JSON.parse(deliveryData.value);
  deleteDialog.value = true;
};

const deleteDeliveryMan = async () => {
  loadingDialog.value = true;
  try {
    if (userRole == 'admin')
    {
      await removeAdminDelivery(deliveryData.value);
    }
    else if (userRole == 'logistic')
    {
      await removeLogisticDelivery(deliveryData.value);
    }
    props.deliveries.splice(props.deliveries.indexOf(currentDeliveryData), 1);
    toast.success("Delivery man deleted successfully");
    loadingDialog.value = false;
    deleteDialog.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const customFilter = (value, search, item, key) => {
  search = search.split(",");
  const term = search[0];
  const branch = search[1];
  if (
    item.raw.name.toLowerCase().includes(term.toLowerCase()) &&
    (branch == "undefined" || branch == "null")
  ) {
    return item.raw.name.toLowerCase().includes(term.toLowerCase());
  } else if (
    item.raw.name.toLowerCase().includes(term.toLowerCase()) &&
    branch !== "undefined" &&
    branch !== "null" &&
    item.raw.branch.name_en.toLowerCase().includes(branch.toLowerCase())
  ) {
    return (
      item.raw.name.toLowerCase().includes(term.toLowerCase()) &&
      item.raw.branch.name_en.toLowerCase().includes(branch.toLowerCase())
    );
  }

  return false;
};

const props = defineProps({
  deliveries: {
    type: Array,
    default: [],
  },
  search: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <!-- DELETE DIALOG -->
  <VDialog v-model="deleteDialog" persistent class="v-dialog-sm">
    <DialogCloseBtn @click="deleteDialog = !deleteDialog" />

    <VCard title="Delete Delivery man">
      <VCardText>
        Are you sure that you want to delete this Delivery man?
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="deleteDialog = false"
          :disabled="loadingDialog"
        >
          Cancel
        </VBtn>
        <VBtn @click="deleteDeliveryMan()" :loading="loadingDialog">
          Delete
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

<VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 mt-10 pt-2" :loading="loading">
  <VDataTable
    :items="props.deliveries"
    :headers="headers"
    :search="props.search"
    :custom-filter="customFilter"
    :items-per-page="15"
  >
    <template #item.is_active="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.is_active).color"
        :class="`text-${resolveStatusVariant(item.raw.is_active).color}`"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveStatusVariant(item.raw.is_active).text }}
      </VChip>
    </template>
    <template v-if="userRole == 'admin' || userRole == 'logistic'" #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="$router.push(`deliveries/edit/${item.raw.id}`)">
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn>
          <VIcon icon="mdi-delete-outline" @click="_deleteDialog(item.value)" />
        </IconBtn>
      </div>
    </template>

    <template v-else-if="userRole == 'restaurant'" #item.actions="{ item }">
      <VBtn variant="flat" :to="`/deliveries/${item.raw.id}`">
        {{ $t('View Details') }}
      </VBtn>
    </template>
  </VDataTable>
</VCard>
</template>
