<template>
  <div class="users-management">
    <h1 class="px-2">{{ $t("Manage Users") }}</h1>
    <div class="px-2">
      <div class="card">
        <Toolbar class="mb-4">
          <template #end>
            <Button :label="$t('New')" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
            <Button
              :label="$t('Delete')"
              icon="pi pi-trash"
              class="p-button-danger"
              :disabled="!selectedUsers || !selectedUsers.length"
              @click="deleteUsersDialog = true"
            />
          </template>
        </Toolbar>
        <DataTable
          v-model:filters="filters"
          v-model:selection="selectedUsers"
          v-model:editingRows="editingRows"
          class="p-datatable-sm p-datatable-users"
          data-key="id"
          edit-mode="row"
          paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          responsive-layout="scroll"
          :global-filter-fields="['name', 'email', 'date', 'type']"
          :loading="loading"
          :paginator="true"
          :row-hover="true"
          :rows-per-page-options="[10, 25, 50]"
          :rows="10"
          :value="users"
          :current-page-report-template="t('pagination-text', users.length, { named: { first: '{first}', last: '{last}', totalRecords: '{totalRecords}' } })"
          @row-edit-save="onRowEditSave"
        >
          <template #header>
            <div class="flex align-items-center">
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" :placeholder="$t('Search')" />
              </span>
            </div>
          </template>
          <template #empty>{{ $t("no-users-found") }}</template>
          <template #loading>{{ $t("loading-users-data-please-wait") }}</template>
          <Column selection-mode="multiple" header-style="width: 3rem"></Column>
          <!-- NAME -->
          <Column field="name" header="Name" filtered-field="name" sortable style="min-width: 14rem">
            <template #editor="{ data, field }">
              <InputText v-model="data[field]" autofocus />
            </template>
          </Column>
          <!-- SURNAME -->
          <Column field="surname" header="Surname" sortable style="min-width: 14rem">
            <template #editor="{ data, field }">
              <InputText v-model="data[field]" autofocus />
            </template>
          </Column>
          <!-- EMAIL -->
          <Column field="email" header="Email" sortable style="min-width: 14rem">
            <template #editor="{ data, field }">
              <InputText v-model="data[field]" autofocus />
            </template>
          </Column>
          <Column :row-editor="true" style="width: 10%; min-width: 8rem" body-style="text-align:center"></Column>
        </DataTable>
      </div>
    </div>
    <!-- DIALOG -->
    <AddUserDialog :new-user-dialog="newUserDialog" @close="closed" />
  </div>
</template>

<script setup lang="ts">
import AddUserDialog from "../../components/User/AddUserDialog.vue";
import { FilterMatchMode } from "primevue/api";
import { updateUser } from "../../services/UsersService";
import Toolbar from "primevue/toolbar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref } from "vue";
import { User } from "../../interfaces/UserInterface";
import { setErrorMessage, setSuccessMessage } from "../../utils/ToastMessageUtils";
import i18n from "../../i18n";

const { t } = i18n.global;
const users = ref([] as User[]);
const selectedUsers = ref([] as User[]);
const editingRows = ref([]);
const newUserDialog = ref(false);
const deleteUsersDialog = ref(false);
const loading = ref(true);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

let user = ref({} as User);

function openNew() {
  user.value = {} as User;
  newUserDialog.value = true;
}
async function onRowEditSave(event: any) {
  let { data, newData, index } = event;
  users.value[index] = newData;

  console.log("index", index);
  console.log("data.id", data.id);
  updateUser(data.id, newData)
    .then((user: User) => {
      setSuccessMessage(t("User updated successfully"));
      users.value[index] = user;
    })
    .catch((error) => {
      setErrorMessage(t("Error updating user"));
      console.log("error", error);
      users.value[index] = data;
    });
  //event.preventDefault();
}
function closed() {
  newUserDialog.value = false;
  loading.value = true;
}
</script>

<style>
.p-paginator .p-dropdown .p-dropdown-label {
  padding-right: 0.5rem !important;
}
.type-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
}
.type-badge.type-admin {
  background-color: #c8e6c9;
  color: #256029;
}
.type-badge.type-user {
  background-color: #ffd8b2;
  color: #805b36;
}
.type-badge.type-manager {
  background-color: #b2ceff;
  color: #364780;
}
.type-badge.type-guest {
  background-color: #b6b6b6;
  color: #424242;
}
.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}
.p-dialog .p-dialog-content {
  padding: 0px 1.5rem 0rem 1.5rem !important;
}
</style>
<style scoped></style>
