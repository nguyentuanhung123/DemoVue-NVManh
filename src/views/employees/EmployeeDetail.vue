<template>
    <!-- Thông tin chi tiết nhân viên-->
    <div id="popup-employee-detail" class="popup">
        <div class="popup-container">
            <div id="btn-close" class="popup__button" @click="onCloseDetail">
                <img src="../../assets/Icons/ic_X.png" alt="">
            </div>
            <div class="popup__header">
                <div class="popup__title">
                    Thông tin nhân viên
                </div>
            </div>
            <div id="popup-detail" class="popup__content">
                <div class="form-row">
                    <div class="form-group">
                        <div class="m-row">
                            <div class="m-col">
                                <div class="input-wrapper" style="width : 175px">
                                    <label class="input__label" for="txtEmployeeCode">Mã nhân viên <span class="required">*</span>:</label>
                                    <input id="txtEmployeeCode" ref="txtEmployeeCode" v-model="newEmployee.EmployeeCode" property-name="EmployeeCode" m-required field-label="Mã nhân viên" type="text" class="input">
                                    <!-- <div class="error-text" hidden>
                                        Mã nhân viên không được để trống
                                    </div> -->
                                </div>
                            </div>
                            <div class="m-col flex-1">
                                <div class="input-wrapper">
                                    <label class="input__label" for="txtEmployeeName">Họ và tên <span class="required">*</span>:</label>
                                    <input id="txtEmployeeName" v-model="newEmployee.FullName" property-name="EmployeeName" m-required field-label="Họ và tên nhân viên" type="text" class="input">
                                    <!-- <div class="error-text" hidden>
                                        Họ và tên không được để trống
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="m-col w-100">
                                <div class="input-wrapper">
                                    <label class="input__label">Đơn vị <span class="required">*</span>:</label>
                                    <select property-name="DepartmentId" class="combobox" m-required field-label="Đơn vị" v-model="newEmployee.DepartmentId" name="department" id="cbxDepartment">
                                        <option value="">-- Chọn phòng ban --</option>
                                        <option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c">Phòng Công Nghệ Thông Tin</option>
                                        <option value="45ac3d26-18f2-18a9-3031-644313fbb055">Phòng Hành Chính</option>
                                        <option value="78aafe4a-67a7-2076-3bf3-eb0223d0a4f7">Phòng Nhân Sự</option>
                                        <option value="7c4f14d8-66fb-14ae-198f-6354f958f4c0">Phòng Kế Toán</option>
                                    </select>
                                    <!-- <div class="error-text" hidden>
                                        Đơn vị không được để trống
                                    </div>  -->
                                </div>                        
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="m-col w-100">
                                <div class="input-wrapper">
                                    <label class="input__label">Chức danh:</label>
                                    <input id="txtPositionName" v-model="newEmployee.PositionName" property-name="PositionName" type="text" class="input">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="m-row">
                            <div class="m-col">
                                <div class="input-wrapper">
                                    <label class="input__label" for="dtDateOfBirth">Ngày sinh:</label>
                                    <input id="dtDateOfBirth" property-name="DateOfBirth" m-required field-label="Ngày sinh nhân viên" type="date" class="input">
                                </div>
                            </div>
                            <div class="m-col">
                                <div class="radio-wrapper">
                                    <label for="txtEmployeeCode" class="input__label">Giới tính:</label>
                                    <div class="radio-data flex">
                                        <div class="radio-item">
                                            <input id="gender--male" type="radio" class="radio" value="0" name="gender">
                                            <label for="gender--male">Nam</label>
                                        </div>
                                        <div class="radio-item">
                                            <input id="gender--female" type="radio" class="radio" value="1" name="gender">
                                            <label for="gender--female">Nữ</label>
                                        </div>
                                        <div class="radio-item">
                                            <input id="gender--other" type="radio" class="radio" value="2" name="gender">
                                            <label for="gender--other">Khác</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="m-col w-100">
                                <div class="input-wrapper">
                                    <label class="input__label" for="txtIdentityNumber" title="Số chứng minh thư nhân dân">Số CMTND:</label>
                                    <input type="text" v-model="newEmployee.IdentityNumber" class="input">
                                </div>
                            </div>
                            <div class="m-col w-100">
                                <div class="input-wrapper">
                                    <label class="input__label" for="txtIdentityNumber">Ngày cấp</label>
                                    <input type="date" class="input">
                                </div>
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="m-col w-100">
                                <div class="input-wrapper">
                                    <label class="input__label" for="txtIdentityAddress">Nơi cấp</label>
                                    <input type="text" v-model="newEmployee.IdentityPlace" class="input">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="m-row">
                        <div class="m-col w-100">
                            <div class="input-wrapper">
                                <label for="txtAddress" class="input__label">Địa chỉ:</label>
                                <input type="text" v-model="newEmployee.Address" class="input">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="m-row">
                        <div class="m-col">
                            <div class="input-wrapper">
                                <label class="input__label" title="Số điện thoại di động">ĐT di động : </label>
                                <input id="txtPhoneNumber" type="text" v-model="newEmployee.PhoneNumber" class="input">
                            </div>
                        </div>
                        <div class="m-col">
                            <div class="input-wrapper">
                                <label class="input__label" title="Số điện thoại cố định">ĐT cố định : </label>
                                <input id="txtTelephoneNumber" type="text" class="input">
                            </div>
                        </div>
                        <div class="m-col">
                            <div class="input-wrapper">
                                <label class="input__label" title="Email">Email : </label>
                                <input id="txtEmail" property-name="Email" v-model="newEmployee.Email" m-required field-label="Email nhân viên" type="text" class="input">
                                <div class="error-text" hidden>
                                    Email không đúng định dạng
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <div class="input-wrapper">
                                <label class="input__label" title="Tài khoản ngân hàng">Tài khoản ngân hàng  : </label>
                                <input type="text" class="input">
                            </div>
                        </div>
                        <div class="m-col">
                            <div class="input-wrapper">
                                <label class="input__label" title="Tên ngân hàng">Tên ngân hàng : </label>
                                <input type="text" class="input">
                            </div>
                        </div>
                        <div class="m-col">
                            <div class="input-wrapper">
                                <label class="input__label" title="Chi nhánh">Chi nhánh : </label>
                                <input type="text" class="input">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup__footer">
                <div class="footer__right">
                    <button id="btn-save" class="btn btn--default bg--green" @click="btnSaveOnClick">Cất</button>
                    <button id="btn-saveadd" class="btn btn--default border--gray">Cất và Thêm</button>
                </div>
                <div class="footer__left">
                    <button id="btn-cancel" class="btn btn--default border--gray">Huỷ bỏ</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    name:"EmployeeDetail",
    props:["employeeId"],
    computed:{
        isAdd: function(){
            if(this.valueIsEmpty(this.employeeId)){
                return true;
            }
            return false;
        }
    },
    watch:{
        newEmployee: {
            handler:function(newValue, oldValue){
            console.log(newValue);
            console.log(oldValue);
            },
            deep:true,
        },
    },
    created(){
        //C1: Chuyển dữ liệu từ prop sang Data
        // console.log("employee: ",this.employee);
        // this.newEmployee = this.employee;

        //Lấy dữ liệu từ Serve
        if(this.valueIsEmpty(this.employeeId)){

            //Lấy mã nhân viên mới
            axios.get("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
            .then(res=>{
                this.newEmployee.EmployeeCode = res.data
                //Focus vào ô nhập liệu đầu tiên
                this.$nextTick(function()
                {
                    //nextTick : khi render xong chạy lệnh bên trong này
                    this.$refs.txtEmployeeCode.focus();
                })
            })
            .catch(res=>{
                console.log(res)
            })
        }
        else{
            axios.get(`https://cukcuk.manhnv.net/api/v1/employees/${this.employeeId}`)
            .then((res)=> {
                this.newEmployee = res.data;
            })
            .catch((res)=>{
                console.log(res)
            })
        }
    },
    /**
     * Đóng form thêm mới dữ liệu goị methods từ con lên cha
     * Author : NVMANH
     */
    methods:{
        onCloseDetail(){
            try{
                this.$emit("onClose");
            }
            catch(e){
                console.log(e);
            }
        },
        /**
        * Cất dữ liệu
        * Author : NVMANH
        */
        btnSaveOnClick(){
            try{
                //Validate dữ liệu
                var isValid = this.validateData();

                if(isValid){
                    //Gọi Api cất dữ liệu : Chú ý trường hợp thêm hay sửa
                    if(this.isAdd){
                        //hiển thị loading
                        axios.post("https://cukcuk.manhnv.net/api/v1/employees",this.newEmployee)
                        .then(res=>{
                            //Ẩn loading:
                            console.log(res);
                            alert("Thành công");
                            //Ẩn form và load lại dữ liệu
                            this.$emit("onClose");
                        })
                        .catch(error=>{
                            console.log(error);
                        })
                    }
                    else{
                        axios.put(`https://cukcuk.manhnv.net/api/v1/employees/${this.employeeId}`,this.newEmployee)
                        .then(res=>{
                            console.log(res);
                            alert("Thành công");
                        })
                        .catch(error=>{
                            console.log(error);
                        }) 
                    }
                }
            }
            catch(e){
                console.log(e);
            }
        },
        validateData(){
            var errors = [];
            try{
                //Mã nhân viên không được phép trống
                if(this.valueIsEmpty(this.newEmployee.EmployeeCode)){
                    errors.push("Mã nhân viên không được phép trống.");
                }
                //Tên nhân viên không được phép trống
                if(this.valueIsEmpty(this.newEmployee.FullName)){
                    errors.push("Họ và tên nhân viên không được phép trống.");
                }
                //Ngày sinh không được lớn hơn ngày hiện tại
                //Email phải đúng định dạng
                //Đơn vị không được để trống
                if(this.valueIsEmpty(this.newEmployee.DepartmentId)){
                    errors.push("Đơn vị không được phép trống.");
                }
                if(errors.length > 0){
                    //Hiển thị cảnh báo lỗi
                    alert("Dữ liệu không hợp lệ");
                    // alert(errors);
                    //trả về false
                    return false;
                }
                return true;
            }
            catch(e){
                console.log(e);
            }
        },
        valueIsEmpty(value){
            if(value == "" || value == null || value == undefined){
                return true;
            }
            return false;
        },
    },
    data(){
        return{
            newEmployee:{},
        }
    }
}
</script>