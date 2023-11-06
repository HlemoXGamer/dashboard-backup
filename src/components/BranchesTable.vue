<script setup>
import { remove as removeBranch } from "@/apis/admin/branches";
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n";
const $useI18n = useI18n();
const t = $useI18n.t;
const langIdentifier = computed(() => {
  if ($useI18n.locale.value === "en") {
    return "name_en";
  } else if ($useI18n.locale.value === "ar") {
    return "name_ar";
  }
});
const branchData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
const deleteDialog = ref(false);
const headers = computed(() => {
  let titles = [];
  titles.push(
    {
      title: t("Name"),
      key: langIdentifier,
    },
    {
      title: t("City"),
      key: "city.name",
    },
    {
      title: t("Areas"),
      key: "areas",
    },
    {
      title: t("Phone Number"),
      key: "phone_no",
    },
    {
      title: t("Created Date"),
      key: "created_at",
    },
  );

  if (!props.performance) {
    titles.push(
      {
        title: t("Status"),
        key: "status",
      },
      {
        title: t("Actions"),
        key: "actions",
      },
    );
  } else {
    titles.push({
      title: t("Actions"),
      key: "actions",
    });
  }
  return titles;
});

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

const customFilter = (value, search, item, key) => {
  const term = search.split(",")[0];
  const areas = search
    .split(",")[1]
    .split("-")
    .filter((e) => e !== "");
  const city = search.split(",")[2];
  if (
    item.raw.name_en.toLowerCase().includes(term.toLowerCase()) &&
    !areas.length
  ) {
    return item.raw.name_en.toLowerCase().includes(term.toLowerCase());
  } else if (
    item.raw.name_en.toLowerCase().includes(term) &&
    city.length &&
    !areas.length
  ) {
    return (
      item.raw.name_en.toLowerCase().includes(term.toLowerCase()) &&
      item.raw.city.name.toLowerCase().includes(city.toLowerCase())
    );
  } else if (
    item.raw.name_en.toLowerCase().includes(term) &&
    city.length &&
    areas.length
  ) {
    return (
      item.raw.name_en.toLowerCase().includes(term.toLowerCase()) &&
      item.raw.city.name.toLowerCase().includes(city.toLowerCase()) &&
      areas.some((value) =>
        item.raw.areas.map((area) => area.name).includes(value),
      )
    );
  }
  return false;
};

let currentBranchData = {};
const _deleteDialog = (product) => {
  currentBranchData = product;
  branchData.value = JSON.stringify(product);
  branchData.value = JSON.parse(branchData.value);
  deleteDialog.value = true;
};

const deleteBranch = async () => {
  loadingDialog.value = true;
  try {
    await removeBranch(branchData.value);
    props.branches.splice(props.branches.indexOf(currentBranchData), 1);
    toast.success("Branch deleted successfully");
    loadingDialog.value = false;
    deleteDialog.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const props = defineProps({
  branches: {
    type: Array,
    default: [],
  },
  search: {
    type: String,
    default: "",
  },
  performance: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <!-- DELETE DIALOG -->

  <VDialog
    v-if="!props.performance"
    v-model="deleteDialog"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="deleteDialog = !deleteDialog" />
    <VCard :title="$t('Delete Branch')">
      <VCardText>
        {{ $t("Are you sure that you want to delete this Branch?") }}
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="deleteDialog = false"
          :disabled="loadingDialog"
        >
          {{ $t("Cancel") }}
        </VBtn>
        <VBtn @click="deleteBranch()" :loading="loadingDialog">
          {{ $t("Delete") }}
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <VCard
    elevation="0"
    rounded="0"
    class="px-0 mb-0 pb-5 mt-10 pt-2"
    :loading="loading"
  >
    <VDataTable
      :items="props.branches"
      :headers="headers"
      :search="props.search"
      :items-per-page="15"
      :custom-filter="customFilter"
    >
      <template #item.areas="{ item }">
        <AreasDialog
          v-if="item.raw.areas[0]"
          :name="item.raw.areas[0][langIdentifier]"
          :areas="item.raw.areas"
        />
      </template>

      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusVariant(item.raw.is_active).color"
          :class="`text-${resolveStatusVariant(item.raw.is_active).color}`"
          size="small"
          class="font-weight-medium"
        >
          {{ resolveStatusVariant(item.raw.is_active).text }}
        </VChip>
      </template>

      <template #item.actions="{ item }">
        <div class="d-flex gap-1" v-if="!props.performance">
          <IconBtn @click="$router.push(`/branches/view/${item.raw.id}`)">
            <VIcon icon="mdi-eye" />
          </IconBtn>
          <IconBtn @click="$router.push(`branches/edit/${item.raw.id}`)">
            <VIcon icon="mdi-pencil-outline" />
          </IconBtn>
          <IconBtn>
            <VIcon
              icon="mdi-delete-outline"
              @click="_deleteDialog(item.value)"
            />
          </IconBtn>
        </div>
        <IconBtn v-if="props.performance">
          <VIcon
            icon="mdi-eye"
            @click="$router.push(`performance/${item.raw.id}`)"
          />
        </IconBtn>
      </template>
    </VDataTable>
  </VCard>
</template>
