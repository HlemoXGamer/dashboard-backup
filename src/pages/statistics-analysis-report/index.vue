<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable';
import { getWebStats } from '@/apis/admin/stats'
import axiosIns from '@/plugins/axios';
const dateDialog = ref(false);
const pickedFromDate = ref(null);
const pickedToDate = ref(null);
const currentStatus = ref("today");
const loadings = ref({
    export: false,
    search: false
});

import { useI18n } from "vue-i18n"
import { onMounted } from 'vue';
const $useI18n = useI18n()
const t = $useI18n.t;

const statuses = computed(() => [
    {
        title: t("Custom"),
        value: "custom",
    },
    {
        title: t("This Month"),
        value: "month",
    },
    {
        title: t("This Week"),
        value: "week",
    },
    {
        title: t("Today"),
        value: "today",
    }])


const headers = computed(() => [
    {
        title: t('Status'),
        key: 'stats',
    },
    {
        title: t('Clicks'),
        key: 'value',
    },
    {
        title: t('Average Time'),
        key: 'avg_time'
    }
])

const webStats = ref([])
const mutanedStats = ref([]);
const webStatsObject = ref({
    page_view: {
        value: "Page View",
        color: "#ff5800",
    },
    category_view: {
        value: "Category View",
        color: "#f7ab00",
    },
    product_view: {
        value: "Product View",
        color: "#009912",
    },
    add_to_cart: {
        value: "Add To Cart",
        color: "#006499",
    },
    address_details: {
        value: "Address Details",
        color: "#009989",
    },
    purchase: {
        value: "Purchase",
        color: "#000099",
    },
})

const _getWebStats = (custom) => {
    loadings.value.search = true;
    if (custom === true) {
        dateDialog.value = false;
        let from = pickedFromDate.value;
        let to = pickedToDate.value;

        getWebStats(`${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}`).then(({ data }) => {
            webStats.value = data;
            makeMutanedStats(data);
        }).finally(() => {
            loadings.value.search = false;
        })
    }
    else {
        getWebStats(`${currentStatus.value}`).then(({ data }) => {
            webStats.value = data;
            makeMutanedStats(data);
        }).finally(() => {
            loadings.value.search = false;
        })
    }
}

const closeDateDialog = () => {
    dateDialog.value = false;
    currentStatus.value = "today";
    pickedFromDate.value = ref();
    pickedToDate.value = ref();
    _getWebStats(false);
}

const isCustom = () => {
    setTimeout(() => {
        if (currentStatus.value == "custom") {
            dateDialog.value = true;
        } else {
            _getWebStats(false);
        }
    }, 100)
}

const _exportExcel = async () => {
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
    try {
        await axiosIns.get(`/google-analytics/?${currentStatus.value}${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}&export`, { responseType: "arraybuffer" })
            .then((res) => {
                const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `statistics-analytics-report-${currentStatus.value}.xlsx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    } catch (err) {
        console.log(err);
    } finally {
        loadings.value.export = false;
    }
}

const makeMutanedStats = (data) => {
    let stats = [];
    Object.entries(data).forEach(([key, value]) => {
        stats.push({
            stats: key.split("_").join(" ").toUpperCase(),
            value
        })
    });
    mutanedStats.value = stats;
}

onMounted(() => {
    _getWebStats()
})
</script>
<template>
    <div>
        <VDialog v-model="dateDialog" persistent class="v-dialog-sm">
            <DialogCloseBtn @click="closeDateDialog()" />
            <VCard title="Pick a custom Date">
                <VCardText class="d-flex ">
                    <AppDateTimePicker class="me-1" :placeholder="$t('From')" prepend-inner-icon="tabler-calendar"
                        v-model="pickedFromDate" :config="{ maxDate: new Date().toISOString() }" />
                    <AppDateTimePicker class="ms-1" :placeholder="$t('To')" prepend-inner-icon="tabler-calendar"
                        v-model="pickedToDate" :config="{ minDate: new Date().toISOString() }" />
                </VCardText>
                <VCardText class="d-flex justify-end gap-3 flex-wrap">
                    <VBtn @click="_getWebStats(true)" :loading="loadings.search"
                        :disabled="!pickedFromDate && !pickedToDate">
                        {{ $t('Pick') }}
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
        <VCol style="background-color: rgb(var(--v-theme-surface));" class="rounded pb-10">
            <VRow class="mx-0 my-0 pb-0 px-0 pt-3">
                <p class="text-h4 ps-3">{{ $t('Website State') }}</p>
                <VSpacer />
                <VBtn prepend-icon="tabler-upload" :loading="loadings.export" color="success" class="mr-3"
                    @click="_exportExcel">{{ $t('Export Excel')
                    }}</VBtn>
            </VRow>
            <VRow class="mx-0 py-0 px-4 py-5 mt-1">
                <VSelect :items="statuses" item-value="value" item-title="title" model-value="today"
                    :label="$t('Select a period of time')" prepend-inner-icon="tabler-clock" v-model="currentStatus" />
                <VBtn class="ms-2" :loading="loadings.search" @click="isCustom()">{{ $t('Search') }}</VBtn>
                <VSpacer />
            </VRow>
            <VRow class="mx-0 my-0 px-4 mt-5">
                <div style="min-height: 600px; border: 5px solid rgb(var(--v-theme-primary))"
                    class="rounded w-100 px-5 py-5">
                    <div v-for="(item, index) in webStats" :key="i">
                        <p class="text-h5 text-center px-0 py-0 mx-0 my-3 font-weight-bold text-uppercase">{{
                            webStatsObject[index].value
                        }}
                        </p>
                        <div :style="{ 'background-color': webStatsObject[index]?.color, 'width': item > 100 ? 199 : item + '%' }"
                            class="mt-0 mb-4 rounded-lg py-3 px-3 mx-auto d-flex align-center justify-center">
                            <p class="text-white py-0 mx-0 my-0 px-0 text-center font-weight-bold">{{ item }}</p>
                        </div>
                    </div>
                </div>
                <p class="text-h4 mt-12 ps-1">{{ $t('Website State') }}</p>
                <VDataTable :headers="headers" :items="mutanedStats" class="mt-1"></VDataTable>
            </VRow>
        </VCol>
    </div>
</template>

<route lang="yaml">
    meta:
      requiresAuth: true
      roles: ["admin"]
  </route>
    