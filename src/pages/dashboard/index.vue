<script setup>
import { get as getSmsBalance } from "@/apis/admin/sms";
import { exportExcel, get as getStats, getTodayStats, getWeekStats, getYesterdayStats } from "@/apis/admin/stats";
import html2pdf from 'html2pdf.js';
const pdfContent = ref(null);
const currentTab = ref("today");
const dateDialog = ref(false);
const pickedFromDate = ref();
const pickedToDate = ref();
const stats = ref();
const smsBalance = ref();
const loadings = ref({
  dialog: false,
  today: false,
  yesterday: false,
  week: false,
  all: false,
  export: false,
});

const _getSms = () => {
  getSmsBalance().then(({ data }) => {
    smsBalance.value = data;
  })
}

const _getStats = (custom) => {
  if (custom === true) {
    dateDialog.value = false;
    loadings.value.all = true;
    let from = pickedFromDate.value;
    let to = pickedToDate.value;
    getStats({ from, to }).then(({ data }) => {
      stats.value = data;
    }).finally(() => {
      loadings.value.all = false;
    })
  } else if (currentTab.value == "today") {
    loadings.value.today = true;
    loadings.value.all = true;
    getTodayStats().then(({ data }) => {
      stats.value = data;
    }).finally(() => {
      loadings.value.today = false;
      loadings.value.all = false;
    })
  } else if (currentTab.value == "yesterday") {
    loadings.value.yesterday = true;
    loadings.value.all = true;
    getYesterdayStats().then(({ data }) => {
      stats.value = data;
    }).finally(() => {
      loadings.value.yesterday = false;
      loadings.value.all = false;
    })
  } else if (currentTab.value == "week") {
    loadings.value.week = true;
    loadings.value.all = true;
    getWeekStats().then(({ data }) => {
      stats.value = data;
    }).finally(() => {
      loadings.value.week = false;
      loadings.value.all = false;
    })
  }
}

const _exportExcel = () => {
  let from = pickedFromDate.value;
  let to = pickedToDate.value;
  let query = {};
  if (from !== null && from !== undefined) {
    query.from = from;
  }
  if (to !== null && to !== undefined) {
    query.to = to;
  }
  loadings.value.export = true;
  exportExcel(Object.keys(query).length ? new URLSearchParams(query).toString() : currentTab.value).then(({ data }) => {
    const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `total-stats-${currentTab.value}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }).finally(() => {
    loadings.value.export = false;
  })
}



const closeDateDialog = () => {
  dateDialog.value = false;
  currentTab.value = "today";
  pickedFromDate.value = ref();
  pickedToDate.value = ref();
  _getStats();
}

const exportPDF = async () => {
  console.log(pdfContent)
  loadings.value.export = true;
  const getPDFName = () => {
    let filename = "";
    if(currentTab.value == "today"){
      filename = "Today's Stats";
    }else if(currentTab.value == "week"){
      filename = "This Week's Stats";
    }else if(currentTab.value == "custom"){
      filename = "Custom Stats | ";
      let from = pickedFromDate.value;
      let to = pickedToDate.value;
      if (from !== null && from !== undefined) {
        filename += `${from} `;
      }
      if (to !== null && to !== undefined) {
        filename += `${to}`;
      }
    }

    return filename;
  }

  const pdfOptions = {
    margin: 5,
    filename: `${getPDFName()}.pdf`,
    image: { type: 'jpeg', quality: 100 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
  }
  
  html2pdf().from(pdfContent.value).set(pdfOptions).save();

  loadings.value.export = false;
}

onMounted(() => {
  _getSms();
  _getStats(false);
})

</script>
<template>
  <div>
    <VDialog v-model="dateDialog" persistent class="v-dialog-sm">
      <DialogCloseBtn @click="closeDateDialog()" />
      <VCard :title="$t('Pick a custom Date')">
        <VCardText class="d-flex ">
          <AppDateTimePicker class="me-1" :placeholder="$t('From')" prepend-inner-icon="tabler-calendar"
            v-model="pickedFromDate" />
          <AppDateTimePicker class="ms-1" :placeholder="$t('To')" prepend-inner-icon="tabler-calendar" v-model="pickedToDate" />
        </VCardText>
        <VCardText class="d-flex justify-end gap-3 flex-wrap">
          <VBtn @click="_getStats(true)" :loading="loadings.dialog" :disabled="!pickedFromDate && !pickedToDate">
            {{ $t("Pick") }}
          </VBtn>
        </VCardText>
      </VCard>
    </VDialog>
  
  <VRow class="mx-0 my-0">
    <VTabs v-model="currentTab" @update:model-value="_getStats()" class="mx-auto v-tabs-pill w-50">
      <VTab value="today" :loading="loadings.today">{{ $t("Today") }}</VTab>
      <VTab value="yesterday" :loading="loadings.yesterday">{{ $t("Yesterday") }}</VTab>
      <VTab value="week" :loading="loadings.week">{{ $t("This Week") }}</VTab>
      <VTab value="custom" @click="dateDialog = true">{{ $t("Custom") }}</VTab>
    </VTabs>
    <VSpacer />
    <VBtn prepend-icon="tabler-upload" color="success" :loading="loadings.export" @click="_exportExcel">{{ $t("Export Excel")}}</VBtn>
  </VRow>
    <VWindow>
      <VWindowItem class="py-7">
        <AdminDashboardStats :loading="loadings.all" :stats="stats" :smsBalance="smsBalance" />
        <!-- <div ref="pdfContent" style="visibility: hidden;">
          <AdminDashboardStatsPrint style="display: none;" :type="currentTab" :loading="loadings.all" :stats="stats" :sms="smsBalance" />
        </div> -->
      </VWindowItem>
    </VWindow>
</div>
</template>

<route lang="yaml">
  meta:
    requiresAuth: true
    roles: ["admin", "operation", "logistics", "finance"]
</route>
  