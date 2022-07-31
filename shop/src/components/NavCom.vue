<template id="navCom" lang="">
    <div class="nav-warpper">
        <!-- 基础导航栏 -->
        <div class="nav-box" v-if="!showNav">
            <div class="nav">
                <el-link id="url" href="https://www.baidu.com" target="_blank" :underline="false"><i
                        class="el-icon-pear"></i>
                </el-link>
                <div :span="1" v-for="i in navListProcess" :key="i.id">
                    <el-link id="url" :href="i.url" target="_blank" :underline="false">{{i.name}}</el-link>
                </div>
                <el-link id="url" href="https://www.baidu.com" target="_blank" :underline="false"><i
                        class="el-icon-search"></i>
                </el-link>
                <el-link id="url" href="https://www.baidu.com" target="_blank" :underline="false"><i
                        class="el-icon-shopping-bag-2"></i>
                </el-link>
            </div>
        </div>
        <!-- 搜索框 -->
        <div class="nav-search" v-if="showNav">
            <i class="el-icon-search"></i>
            <!-- <el-input v-model="searchValue" placeholder="搜索 apple.com.cn"></el-input> -->
            <!-- 下拉搜索框 -->
            <el-select v-model="value" multiple filterable remote reserve-keyword placeholder="请输入关键词"
                :remote-method="remoteMethod" :loading="loading">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <i class="el-icon-close "></i>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'NavCom',
        data() {
            return {
                // 控制导航条显示
                showNav: true,
                navList: ['商店', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', '家居', 'Apple独家', '配件', '技术支持'],
                navUrls: ['www.baidu.com', 'www.baidu.com', 'www.baidu.com', 'www.baidu.com', 'www.baidu.com', 'www.baidu.com', 'www.baidu.com', 'www.baidu.com', 'www.baidu.com', 'www.baidu.com'],
                navListProcess: [],
                searchValue: '',
                //    下拉框设置
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        mounted() {
            // 处理导航列表
            let list = []
            this.navList.forEach((nav, index) => {
                console.log('当前的', nav, index, this.navList.length)
                console.log('判断生效')
                let navs = {
                    id: "nav" + index + 1,
                    name: nav,
                    url: this.navUrls[index]
                };
                list.push(navs)
                if (index == this.navList.length - 1) {
                    console.log('最后一次')
                    this.navListProcess = list
                    console.log('处理后的navs:', this.navListProcess)
                }
            });
        },

    }
</script>
<style>
    * {
        font-size: 12px;
        font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    .nav-warpper {
        display: flex;
        justify-content: center;
        background-color: #313132;
    }

    .nav {
        width: 980px;
        height: 44px;
        padding: 0 22px;
        background-color: #313132;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
    }

    .nav i {
        color: rgba(245, 245, 247, 0.5);
        font-size: 20px;
        margin-top: 12px;
        text-align: center;
    }

    .nav i:hover {
        color: rgb(245, 245, 247)
    }

    .nav .el-link--inner {
        color: rgba(245, 245, 247, 0.7);
    }

    .nav .el-link--inner:hover {
        color: rgb(245, 245, 247);
    }

    .nav-search {
        width: 682px;
        display: flex;
        align-items: center;
    }

    .nav-search i {
        font-size: 14px;
        color: rgba(245, 245, 247, 0.5);
        padding: 10px;
    }

    .nav-search .el-icon-close {
        font-size: 20px;
    }

    .nav-search input {
        background-color: #313132;
        border: 0;
        color: rgb(245, 245, 247);
        font-size: 16px;
    }

    .nav-search input::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: rgba(245, 245, 247, 0.3);
        font-size: 15px;
        letter-spacing: 1px;
    }
</style>