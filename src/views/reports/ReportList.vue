<template>
    <div>
        Danh sách báo cáo
        <div>{{customer.Fullname}}</div>
        <input type="text" id="txtName" v-model="customer.Fullname">
        <!-- v-model - binding 2 chiều-->
        <input type="text" id="txtName2" v-model="customer.Address">
        <!-- hiển thị theo cái trên (1 chiều)-->
        <button @click="btnAddOnClick">Hiển Thị thông tin khách hàng</button>
        <ul>
            <li v-for="(item,index) of customers" :key="index">{{item.Fullname}}</li>
        </ul>
        <table>
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Họ và tên</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) of customers" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.Fullname}}</td>
                </tr>
            </tbody>
        </table>
        <div v-show="isShowInfo" class="detail">
           <div>Thông tin khách hàng</div>
           <div>{{customer.Fullname}}</div>
           <div>{{customer.Address}}</div>
           <button @click="btnHideInfo">Ẩn thông tin</button>
        </div>
        <div>--------------------------</div>
    </div>
</template>

<script>
  export default {
    name:"ReportList",
    methods:{
        btnAddOnClick(){
            this.isShowInfo = true;
        },
        btnHideInfo(){
            this.isShowInfo = false;
        },
        /**
         * 
         */
        loadData(){
            
        },
    },
    beforeCreate()//chưa có tác động lên data
    {
        console.log("1. beforeCreate");
    },
    created()//chỉ có tác động lên data
    {
        console.log("2. created");
    },
    beforeMount(){
        console.log("3. beforeMount");
    },
    mounted()//đã tác động lên DOM
    {
        console.log("4. mounted");
        // var name = this.fullname;
        // this.fullname = "Nguyễn Thị Mộng"
        // var name2 = this.fullname;
        // var el = document.getElementById("txtName");
        // console.log("Họ và tên 1 : ",name);
        // console.log("Họ và tên 2 : ",name2);
        // console.log("Element : ",el)
    },
    beforeUpdate()
    {
        console.log("5. beforeUpdate");
    },
    updated()//sau khi mounted thay đổi
    {
        console.log("6. updated");
    },
    beforeUnmount(){
        console.log("7. beforeUnmount");
    },
    unmounted(){
        console.log("8. unmounted");
    },
    data(){
        return{
            customer:{
                Fullname:"Nguyễn Thị Mộng",
                Address:"Hà Nội"
            },
            customers:[
            {
                Fullname:"Nguyễn Ngọc Hiệp",
                Address:"Thái Bình"
            },
            {
                Fullname:"Nguyễn Đức Thuận",
                Address:"Bình Thuận"
            },
            {
                Fullname:"Ngô Trung Kiên",
                Address:"Năm Định"
            },
            ],
            isShowInfo: false
        }
    }
  }
</script>

