<script setup>
import {
  remove as adminRemove,
  update as adminUpdate,
} from "@/apis/admin/vouchers";
import {
  remove as markterRemove,
  update as markterUpdate,
} from "@/apis/markter/vouchers";
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const voucherData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
const toggleDialog = ref(false);
const deleteDialog = ref(false);
const headers = computed(() => [
  {
    title: t("Voucher Code"),
    key: "v_code",
  },
  {
    title: t("Name"),
    sortable: false,
    key: "v_name",
  },
  {
    title: t("Limit"),
    key: "v_limit",
  },
  {
    title: t("Min. Total"),
    key: "v_min_total",
  },
  {
    title: t("Amount"),
    key: "v_amount",
  },
  {
    title: t("Type"),
    sortable: false,
    key: "v_type_name",
  },
  {
    title: t("Usage"),
    key: "v_usage",
  },
  {
    title: t("Status"),
    align: "center",
    key: "v_is_active",
  },
  {
    title: t("Actions"),
    key: "actions",
    sortable: false,
    align: "center",
  },
])

const resolveStatusVariant = (status) => {
  if (parseInt(status) !== 0) {
    return {
      color: "success",
      text: "Active",
    };
  } else {
    if (parseInt(status) === 0) {
      return {
        color: "secondary",
        text: "Disabled",
      };
    }
  }
};

const customFilter = (value, search, item, key) => {
  if (item.raw.v_name.toLowerCase().includes(search.toLowerCase())) {
    return item.raw.v_name.toLowerCase().includes(search.toLowerCase());
  }
  return false;
};

let currentVoucherData = {};
const _toggleDialog = (voucher) => {
  currentVoucherData = voucher;
  voucherData.value = JSON.stringify(voucher);
  voucherData.value = JSON.parse(voucherData.value);
  toggleDialog.value = true;
};

const toggleVoucher = async () => {
  loadingDialog.value = true;
  let is_active = 0;
  try {
    if (voucherData.value.v_is_active === 1) {
      voucherData.value.v_is_active = 0;
    } else {
      voucherData.value.v_is_active = 1;
      is_active = 1;
    }

    userRole === "admin"
      ? await adminUpdate(voucherData.value.v_id, voucherData.value)
      : await markterUpdate(voucherData.value.v_id, voucherData.value);
    currentVoucherData.v_is_active = is_active;
    toast.success("Voucher updated successfully");
    loadingDialog.value = false;
    toggleDialog.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const _deleteDialog = (voucher) => {
  currentVoucherData = voucher;
  voucherData.value = JSON.stringify(voucher);
  voucherData.value = JSON.parse(voucherData.value);
  deleteDialog.value = true;
};

const deleteVoucher = async () => {
  loadingDialog.value = true;
  try {
    userRole === "admin"
      ? await adminRemove(voucherData.value.v_id)
      : await markterRemove(voucherData.value.v_id);
    props.vouchers.splice(props.vouchers.indexOf(currentVoucherData), 1);
    toast.success("Voucher deleted successfully");
    loadingDialog.value = false;
    deleteDialog.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const props = defineProps({
  search: {
    type: String,
    default: "",
  },
  vouchers: {
    type: Array,
    default: () => [],
  },
  searhc: {
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
  <!-- TOGGLE DIALOG -->
  <VDialog v-model="toggleDialog" persistent class="v-dialog-sm">
    <DialogCloseBtn @click="toggleDialog = !toggleDialog" />

    <VCard title="Toggle Voucher">
      <VCardText>
        Are you sure that you want to turn on/off this Voucher?
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="toggleDialog = false"
          :disabled="loadingDialog"
        >
          Cancel
        </VBtn>
        <VBtn @click="toggleVoucher()" :loading="loadingDialog"> Yes </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- DELETE DIALOG -->

  <VDialog v-model="deleteDialog" persistent class="v-dialog-sm">
    <DialogCloseBtn @click="deleteDialog = !deleteDialog" />

    <VCard title="Delete Voucher">
      <VCardText>
        Are you sure that you want to delete this Voucher?
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
        <VBtn @click="deleteVoucher()" :loading="loadingDialog"> Delete </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 mt-10 pt-2" :loading="loading">
  <VDataTable
    :search="search"
    :items="props.vouchers"
    :headers="headers"
    :items-per-page="15"
    :custom-filter="customFilter"
  >
    <template #item.v_is_active="{ item }">
      <VChip
        :color="resolveStatusVariant(item.value.v_is_active).color"
        :class="`text-${resolveStatusVariant(item.value.v_is_active).color}`"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveStatusVariant(item.value.v_is_active).text }}
      </VChip>
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="$router.push(`vouchers/view/${item.raw.v_id}`)">
          <VIcon icon="mdi-eye" />
        </IconBtn>
        <IconBtn @click="$router.push(`vouchers/edit/${item.raw.v_id}`)">
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn @click="_deleteDialog(item.value)">
          <VIcon icon="mdi-delete-outline" />
        </IconBtn>
        <IconBtn
          v-if="item.value.v_is_active === 1"
          @click="_toggleDialog(item.value)"
        >
          <VIcon icon="mdi-ban" />
        </IconBtn>
        <IconBtn
          v-if="item.value.v_is_active === 0"
          @click="_toggleDialog(item.value)"
        >
          <VIcon icon="mdi-play" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>
  </VCard>
</template>
