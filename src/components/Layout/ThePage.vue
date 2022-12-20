<template>
    <div class="page">
                <div class="page__header">
                    <div class="page__title">Danh sách {{title}}</div>
                    <div class="page__button">
                        <!-- <m-button class="nvmanh" text="Thêm mới"></m-button> -->
                        <m-button text="Thêm mới" @click="btnAddOnClick"></m-button>
                        <!-- <ms-combobox url="https://amis.manhnv.net/api/v1/departments" propText="DepartmentName" propValue="DepartmentId"></ms-combobox> -->
                    </div>
                </div>
                <div class="page__container">
                    <div class="table-wrapper">
                        <div class="table__toolbar">
                            <div class="toolbar__left">
                                <input type="text" class="input input-icon">
                            </div>
                            <div class="toolbar__right">
                                <button class="btn--refresh"></button>
                            </div>
                        </div>
                        <div class="table__container">
                            <table id="tbEmployeeList">
                                <thead>
                                    <tr>
                                        <th class="text-align--left" style="width:50px">STT</th>
                                        <th class="text-align--left" style="width:120px">Mã nhân viên</th>
                                        <th class="text-align--left">Họ và tên</th>
                                        <th class="text-align--left" style="width:150px">Giới tính</th>
                                        <th class="text-align--center" style="width:50px">Ngày sinh</th>
                                        <th class="text-align--right" style="width:100px">Mức lương</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in employees" :key="index" @dblclick="rowOnDblClick(item)">
                                        <td class="text-align--left">{{index+1}}</td>
                                        <td class="text-align--left">{{item.EmployeeCode}}</td>
                                        <td class="text-align--left">{{item.FullName}}</td>
                                        <td class="text-align--left">{{item.GenderName}}</td>
                                        <td class="text-align--center">{{formatDate(item.DateOfBirth)}}</td>
                                        <td class="text-align--right">{{formatMoney(item.Salary)}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="table__paging">table__paging</div>
                    </div>
                </div>
    </div>
    <EmployeeDetail v-if="showDetail" :employeeId="employeeIdSelected" @onClose="onCloseDetail"></EmployeeDetail>
</template>


<script>
   import EmployeeDetail from "@/views/employees/EmployeeDetail.vue";
   import axios from "axios"
   export default{
    name: "ThePage",
    components:{
        EmployeeDetail
    },
    created(){
       //thực hiện load dữ liệu
       this.loadData();
    },
    methods:{
        /**
         * Sửa dữ liệu
         * Author : NVMANH 
         */
        rowOnDblClick(item){
            try{
               //Hiển thị Dialog
               this.showDetail = true;
               //this.employeeSelected = item;
               this.employeeIdSelected = item.EmployeeId;
               //console.log("Item", this.employeeIdSelected);
            }
            catch(e){
                console.log(e);
            }
        },
        /**
         * Hiển form thêm mới dữ liệu
         * Author : NVMANH
         */
        btnAddOnClick(){
            try{
                this.showDetail = true;
            }
            catch(e){
                console.log(e);
            }
        },
        /**
         * Đóng form thêm mới dữ liệu
         * Author : NVMANH
         */
        onCloseDetail(){
            try{
                this.showDetail = false;
                //Load lại dữ liệu
                this.loadData()
            }
            catch(e){
                console.log(e);
            }
        },
        /**
         * Định dạng ngày sinh
         */
        formatDate(date){
            try{
               if(date){
                //Chuyển sang dữ liệu Date:
                date = new Date(date);
                let day = date.getDate();
                day = day < 10?`0${day}`:day;
                let month = date.getMonth()+1;
                month = month < 10?`0${month}`:month;
                let year = date.getFullYear();
                return `${day}/${month}/${year}`;
               }
               else{
                return "";
               }
            }
            catch(error){
                console.log(error);
                return "";
            }
        },

        /**
         * Định dạng tiền
         * Author : NVMANH(16/12/2022)
         */
        formatMoney(money){
            try{
                if(money)
                {
                    var moneyFormat = new Intl.NumberFormat('vi', {style: 'currency',currency: 'VND'}).format(money);
                    return moneyFormat;
                }
                else{
                    return "";
                }
            }
            catch(error){
                console.log(error);
                return "";
            }
        },

        loadData(){
            //Gọi API:
            axios.get("https://cukcuk.manhnv.net/api/v1/employees")
            .then(res=>{
                this.employees = res.data;
            })
            .catch(error=>{
                console.log(error);
            })
            //Gán dữ liệu

            //Hiển thị lỗi nếu có
        }

    },
    props:{
        title:String
    },
    data(){
       return{
        employees:[],
        showDetail : false,
        // employeeSelected: {},
        employeeIdSelected: {}
       }
    }
   }
</script>

<style scoped>
   @import url(../../css/layout/page.css);
   .nvmanh{
    background-color: #000;
   }
</style>