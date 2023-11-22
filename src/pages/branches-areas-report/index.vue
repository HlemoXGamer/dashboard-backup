<script setup>
import { getBranchArea } from "@/apis/admin/stats";
import { getBranchArea as getRestaurantBranchArea } from "@/apis/restuarant/stats";
import { getBranchArea as getOperationBranchArea } from "@/apis/operation/stats";
import { getBranchArea as getLogisticBranchArea } from "@/apis/logistics/stats";
import { getBranchArea as getFinanceBranchArea } from "@/apis/finances/stats";
import { getBranchArea as getAgentBranchArea } from "@/apis/agent/stats";
import axiosIns from "@/plugins/axios";
import BarChart from '@core/libs/chartjs/components/BarChart';
import { VDataTable } from 'vuetify/labs/VDataTable';
import { useI18n } from "vue-i18n"
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const branchData = JSON.parse(localStorage.getItem("userData"));
const currentTab = ref(0);
const currentStatus = ref("today");
const loading = ref(false);
const loadings = ref({
  export: false
});
const branch_chart_key = ref(0);
const area_chart_key = ref(0);
const dateDialog = ref(false);
const pickedFromDate = ref(null);
const pickedToDate = ref(null);
const stats = ref({
    area: [],
    branch: []
});
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

const branch_chart = {
  labels: [
  ],
  datasets: [{
    label: t('Orders'),    
    maxBarThickness: 30,
    backgroundColor: "#ffcf5c",
    borderColor: 'transparent',
    borderRadius: {
      topRight: 5,
      topLeft: 5,
    },
    data: [],
  },
  {
    label: t('Sales'),    
    maxBarThickness: 30,
    backgroundColor: "#4169e1",
    borderColor: 'transparent',
    borderRadius: {
      topRight: 5,
      topLeft: 5,
    },
    data: [],
  }],
}

const area_chart = {
    labels: [
  ],
  datasets: [{
    label: t('Orders'),    
    maxBarThickness: 30,
    backgroundColor: "#ffcf5c",
    borderColor: 'transparent',
    borderRadius: {
      topRight: 5,
      topLeft: 5,
    },
    data: [],
  },
  {
    label: t('Sales'),    
    maxBarThickness: 30,
    backgroundColor: "#4169e1",
    borderColor: 'transparent',
    borderRadius: {
      topRight: 5,
      topLeft: 5,
    },
    data: [],
  }],
}

const branch_headers = [
    {
        title: t('Branch'),
        key: 'name.en',
        sortable: false,
    },
    {
        title: t('Sales Amount'),
        key: 'orders_amount',
    },
    {
        title: t('Number of Orders'),
        key: 'orders_count'
    }
]

const area_headers = [
    {
        title: t('Area'),
        key: 'name.en',
        sortable: false,
    },
    {
        title: t('Sales Amount'),
        key: 'orders_amount',
    },
    {
        title: t('Number of Orders'),
        key: 'orders_count'
    }
]

const getStats = (custom) => {
    loading.value = true;
    if(custom === true){
        dateDialog.value = false;
        let from = pickedFromDate.value;
        let to = pickedToDate.value;
        if(userRole == "admin"){
            getBranchArea(`${currentTab.value}${from !== null ? '&from='+from : ''}${to !== null ? '&to='+to : ''}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        }else if(userRole == "restaurant"){
            getRestaurantBranchArea(`${currentTab.value}&branch=${branchData.branch_id}${from !== null ? '&from='+from : ''}${to !== null ? '&to='+to : ''}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        }else if(userRole == "operation"){
            getOperationBranchArea(`${currentTab.value}${from !== null ? '&from='+from : ''}${to !== null ? '&to='+to : ''}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        } else if(userRole == "logistic"){
            getLogisticBranchArea(`${currentTab.value}${from !== null ? '&from='+from : ''}${to !== null ? '&to='+to : ''}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        } else if(userRole == "finance"){
            getFinanceBranchArea(`${currentTab.value}${from !== null ? '&from='+from : ''}${to !== null ? '&to='+to : ''}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        } else if(userRole == "agent"){
            getAgentBranchArea(`${currentTab.value}${from !== null ? '&from='+from : ''}${to !== null ? '&to='+to : ''}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        }
    }else{
        if(userRole == "admin"){
            getBranchArea(`${currentTab.value}&${currentStatus.value}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        }else if(userRole == "restaurant"){
            getRestaurantBranchArea(`${currentTab.value}&${currentStatus.value}&branch=${branchData.branch_id}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        }else if(userRole == "operation"){
            getOperationBranchArea(`${currentTab.value}&${currentStatus.value}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        } else if(userRole == "logistic"){
            getLogisticBranchArea(`${currentTab.value}&${currentStatus.value}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        } else if(userRole == "finance"){
            getFinanceBranchArea(`${currentTab.value}&${currentStatus.value}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        } else if(userRole == "agent"){
            getAgentBranchArea(`${currentTab.value}&${currentStatus.value}`).then(({data}) => {
                stats.value[currentTab.value] = data;
                if(currentTab.value == "area"){
                    area_chart.labels = stats.value.area.map((area) => area.name.en);
                    area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
                    area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);    
                }else{
                    branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
                    branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
                    branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
                }
            }).finally(() => {
                loading.value = false;
                branch_chart_key.value += 1;
                area_chart_key.value += 1;
            })
        }
    }
    
}

const closeDateDialog = () => {
  dateDialog.value = false;
  currentStatus.value = "today";
  pickedFromDate.value = ref(null);
  pickedToDate.value = ref(null);
  getStats(true);
}

const isCustom = () => {
    setTimeout(() => {
        if(currentStatus.value == "custom"){
            dateDialog.value = true;
        }else{
            getStats(false);
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
    try{
      await axiosIns.get(`${userRole !== 'admin' ? userRole == 'restaurant' ? 'restaurant-apis' : userRole : ''}/stats/branchArea?type=${currentTab.value}&${currentStatus.value}${from !== null ? '&from='+from : ''}${to !== null ? '&to='+to : ''}&export${userRole == 'restaurant' ? '&branch='+branchData.branch_id : ''}`, { responseType: "arraybuffer" })
          .then((res) => {
              const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", `${currentTab.value}-report-${currentStatus.value}.xlsx`);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          });
    }catch(err){
      console.log(err);
    }finally{
      loadings.value.export = false;
    }
}
onMounted(() => {
    if(userRole == "restaurant"){
        getRestaurantBranchArea(`branch&today&branch=${branchData.branch_id}`).then(({data}) => {
        stats.value["branch"] = data;
        branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
        branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
        branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
    }).finally(() => {
        branch_chart_key.value += 1;
    })
    getRestaurantBranchArea(`area&today&branch=${branchData.branch_id}`).then(({data}) => {
        stats.value["area"] = data;
        area_chart.labels = stats.value.area.map((area) => area.name.en);
        area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
        area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);
    }).finally(() => {
        area_chart_key.value += 1;
    })
    }else if(userRole == "admin"){
        getBranchArea(`branch&today`).then(({data}) => {
        stats.value["branch"] = data;
        branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
        branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
            branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
        }).finally(() => {
            branch_chart_key.value += 1;
        })
        getBranchArea(`area&today`).then(({data}) => {
            stats.value["area"] = data;
            area_chart.labels = stats.value.area.map((area) => area.name.en);
            area_chart.datasets[0].data = stats.value.area.map((area) => area.orders_count);
            area_chart.datasets[1].data = stats.value.area.map((area) => area.orders_amount);
        }).finally(() => {
            area_chart_key.value += 1;
        })
    }else if(userRole == "operation"){
        getOperationBranchArea(`branch&today`).then(({data}) => {
        stats.value["branch"] = data;
        branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
        branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
        branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
        }).finally(() => {
            branch_chart_key.value += 1;
        })
    }else if(userRole == "logistic"){
        getLogisticBranchArea(`branch&today`).then(({data}) => {
        stats.value["branch"] = data;
        branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
        branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
        branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
        }).finally(() => {
            branch_chart_key.value += 1;
        })
    }else if(userRole == "finance"){
        getFinanceBranchArea(`branch&today`).then(({data}) => {
        stats.value["branch"] = data;
        branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
        branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
        branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
        }).finally(() => {
            branch_chart_key.value += 1;
        })
    }else if(userRole == "agent"){
        getAgentBranchArea(`branch&today`).then(({data}) => {
        stats.value["branch"] = data;
        branch_chart.labels = stats.value.branch.map((branch) => branch.name.en);
        branch_chart.datasets[0].data = stats.value.branch.map((branch) => branch.orders_count);
        branch_chart.datasets[1].data = stats.value.branch.map((branch) => branch.orders_amount);
        }).finally(() => {
            branch_chart_key.value += 1;
        })
    }
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
              <VBtn @click="getStats(true)" :loading="loading" :disabled="!pickedFromDate && !pickedToDate">
                {{ $t('Pick') }}
              </VBtn>
            </VCardText>
          </VCard>
        </VDialog>

        <VRow class="mx-0 my-0">
            <VTabs v-model="currentTab" class="mx-auto v-tabs-pill">
                <VTab value="branch">{{ $t('Top Branches') }}</VTab>
                <VTab value="area" v-if="userRole !== 'finance' && userRole !== 'operation' && userRole !== 'logistic'">{{ $t('Top Areas') }}</VTab>
            </VTabs>
            <VSpacer />
            <VBtn prepend-icon="tabler-upload" color="success" class="mr-3" @click="_exportExcel" :loading="loadings.export">{{ $t('Export Excel') }}</VBtn>
        </VRow>
        <VWindow v-model="currentTab">
            <VWindowItem value="branch" class="py-7">
                <VCol style="background-color: rgb(var(--v-theme-surface));" class="rounded pb-10">
                    <p class="text-h4 ps-3 pt-3">{{ $t('Branches Sales/Orders') }}</p>
                <VRow class="mx-0 py-0 px-4 py-5 mt-1">
                    <VSelect :items="statuses" item-value="value" :disabled="loading" item-title="title" v-model="currentStatus" :label="$t('Select a period of time')" prepend-inner-icon="tabler-clock"/>
                    <VBtn class="ms-2" @click="isCustom()" :loading="loading">{{ $t('Search') }}</VBtn>
                    <VSpacer />
                </VRow>
                <VRow class="mx-0 my-0 px-4 mt-5">
                    <BarChart :height="200" :chart-data="branch_chart" :key="branch_chart_key"/>
                    <p class="text-h4 mt-12 ps-1">{{ $t('Top Branches') }}</p>
                    <VDataTable :headers="branch_headers" :items="stats.branch" class="mt-1"/>
                </VRow>
                </VCol>
            </VWindowItem>
            <VWindowItem value="area" class="py-7" v-if="userRole !== 'finance' && userRole !== 'operation' && userRole !== 'logistic'">
                <VCol style="background-color: rgb(var(--v-theme-surface));" class="rounded pb-10">
                    <p class="text-h4 ps-3 pt-3">{{ $t('Areas Sales/Orders') }}</p>
                <VRow class="mx-0 py-0 px-4 py-5 mt-1">
                    <VSelect :items="statuses" item-value="value" :disabled="loading" item-title="title" v-model="currentStatus" :label="$t('Select a period of time')" prepend-inner-icon="tabler-clock"/>
                    <VBtn class="ms-2" @click="isCustom()" :loading="loading">{{ $t('Search') }}</VBtn>
                    <VSpacer />
                </VRow>
                <VRow class="mx-0 my-0 px-4 mt-5">
                    <VCol class="mx-0 my-0 py-0 px-0">
                        <BarChart :height="200" :chart-data="area_chart" :key="area_chart_key"/>
                        <p class="text-h4 mt-12 ps-1">{{ $t('Top Areas') }}</p>
                        <VDataTable :headers="area_headers" :items="stats.area" class="mt-1"/>
                    </VCol>
                </VRow>
                </VCol>
            </VWindowItem>
        </VWindow>
    </div>
</template>

<route lang="yaml">
    meta:
      requiresAuth: true
      roles: ["admin", "restaurant", "operation", "logistic", "finance", "agent"]
  </route>
    