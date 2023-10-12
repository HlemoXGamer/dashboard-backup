<script setup>
import { remove } from "@/apis/admin/employees";
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const employeeData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
const deleteDialog = ref(false);
const headers = computed(() => [
  {
    title: t("Employee Code"),
    sortable: false,
    key: "employee_code",
  },
  {
    title: t("Name"),
    sortable: false,
    key: "employee_name",
  },
  {
    title: t("Phone Number"),
    sortable: false,
    key: "employee_phone",
  },
  {
    title: t("Email"),
    sortable: false,
    key: "employee_email",
  },
  {
    title: t("Position"),
    sortable: false,
    key: "employee_position",
  },
  {
    title: t("Actions"),
    key: "actions",
    sortable: false,
    align: "center",
  },
])

const customFilter = (value, search, item, key) => {
  if (
    String(item.raw.employee_name).toLowerCase().includes(search.toLowerCase())
  ) {
    return String(item.raw.employee_name)
      .toLowerCase()
      .includes(search.toLowerCase());
  }
  return false;
};

let currentEmployeeData = {};

const _deleteDialog = (employee) => {
  currentEmployeeData = employee;
  employeeData.value = JSON.stringify(employee);
  employeeData.value = JSON.parse(employeeData.value);
  deleteDialog.value = true;
};

const deleteEmployee = async () => {
  loadingDialog.value = true;
  try {
    await remove(employeeData.value.v_id);
    props.employees.splice(props.employees.indexOf(currentEmployeeData), 1);
    toast.success("Employee deleted successfully");
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
  employees: {
    type: Array,
    default: () => [],
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

    <VCard title="Delete Employee">
      <VCardText>
        Are you sure that you want to delete this Employee?
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
        <VBtn @click="deleteEmployee()" :loading="loadingDialog"> Delete </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

<VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 mt-10 pt-2" :loading="loading">
  <VDataTable
    :search="search"
    :items="props.employees"
    :headers="headers"
    :items-per-page="15"
    :custom-filter="customFilter"
  >
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn
          @click="$router.push(`employees/edit/${item.raw.employee_id}`)"
        >
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn @click="_deleteDialog(item.value)">
          <VIcon icon="mdi-delete-outline" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>
  </VCard>
</template>
