<template>
    <div class="sidebar">
            <div class="navbar">
                <router-link to="/home" class="navbar-item">
                    <div class="navbar__icon">
                        <img src="../../assets/Icons/ic_TongQuan.svg" alt="">
                    </div>
                    <div class="navbar__text">Tổng quan</div>
                </router-link>
                <router-link to="/customers" class="navbar-item">
                    <div class="navbar__icon">
                        
                    </div>
                    <div class="navbar__text">Khách hàng</div>
                </router-link>
                <router-link to="/employees" class="navbar-item">
                    <div class="navbar__icon">
                        
                    </div>
                    <div class="navbar__text">Nhân viên</div>
                </router-link>
                <router-link to="/reports" class="navbar-item">
                    <div class="navbar__icon">
                        <img src="../../assets/Icons/ic_BaoCao.svg" alt="">
                    </div>
                    <div class="navbar__text">Báo cáo</div>
                </router-link>
                <router-link to="/settings" class="navbar-item">
                    <div class="navbar__icon"></div>
                    <div class="navbar__text">Cài đặt</div>
                </router-link>
            </div>
            <div class="sidebar-option">

            </div>
        </div>
</template>

<script>
   export default{
    name: "SideBar"
   }
</script>

<style scoped>
   @import url(../../css/layout/sidebar.css);
</style>