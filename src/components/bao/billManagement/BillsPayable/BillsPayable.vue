<template>
    <div class="receivableBill">
        <header>应付账单</header>
        <el-tabs v-model="activeName" @tab-click="handleClick" v-loading="from_list_all==''">
            <el-tab-pane name="1">
                <span slot="label">全部</span>
                <div>
                    <el-select v-model="huankuanValue" v-if="from_list_all != []" placeholder="请选择还款方"
                               v-on:change="huankuanValueChange()">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <!-- 表单列表 -->
                    <ul>
                        <li class="form_list" v-for="(item,index) in from_list_all">
                            <div>
                                <div class="listDisplay_title clearFix">
                                    <p>
                                        <span>{{item.productName}}</span>
                                        <span>{{item.applyTime}}</span>
                                        <span>还款方：{{item.repaymentParty}}</span>
                                    </p>
                                    <div>
                                        <router-link :to="{name:''}" v-if="item.taskDefKey=='2'" class="modify" tag="a">
                                            <i class="el-icon-edit-outline"></i>修改
                                        </router-link>
                                        <span class="del" @click="del(item.applyNum,index)"><i
                                            class="el-icon-delete"></i>删除</span>
                                    </div>
                                </div>
                                <div class="listDisplay_content">
                                    <ul class="clearFix">
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单金额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单净额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>到期日</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>企业审核日</p>
                                        </li>
                                        <li>
                                            <p v-if="item.taskDefKey=='0'">待审核</p>
                                            <p v-if="item.taskDefKey=='1'">审核通过</p>
                                            <p v-if="item.taskDefKey=='2'">审核不通过</p>
                                            <p v-if="item.taskDefKey=='3'">已过期</p>
                                            <p>状态</p>
                                        </li>
                                        <li>
                                            <p>3</p>
                                            <p>票据数量</p>
                                        </li>
                                        <li>
                                            <router-link class="apply" tag="a"
                                                         :to="{name:'financingExamineDetails',params:{type:'apply',id:item.applyNum,code:item.taskDefKey}}">
                                                查看详情
                                            </router-link>
                                            <router-link
                                                :to="{name:'financingExamineDetails',params:{type:'examine',id:item.applyNum,code:item.taskDefKey}}"
                                                v-if="item.taskDefKey=='0'" class="apply1">审核
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 表单列表 -->
                    <!-- 分页 -->
                    <div class="block paging" v-if="from_list_all != []">
                        <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="6"
                            layout="total, prev, pager, next, jumper"
                            :total=total[0]
                            prev-text="上一页"
                            next-text="下一页">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="2">
                <span slot="label">待审核<el-badge :value="2" class="item"></el-badge></span>
                <div>
                    <el-select v-model="huankuanValue" v-if="from_list_all != []" placeholder="请选择还款方"
                               v-on:change="huankuanValueChange()">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <!-- 表单列表 -->
                    <ul>
                        <li class="form_list" v-for="(item,index) in from_list_all">
                            <div>
                                <div class="listDisplay_title clearFix">
                                    <p>
                                        <span>{{item.productName}}</span>
                                        <span>{{item.applyTime}}</span>
                                        <span>还款方：{{item.repaymentParty}}</span>
                                    </p>
                                    <div>
                                        <router-link :to="{name:''}" v-if="item.taskDefKey=='2'" class="modify" tag="a">
                                            <i class="el-icon-edit-outline"></i>修改
                                        </router-link>
                                        <span class="del" @click="del(item.applyNum,index)"><i
                                            class="el-icon-delete"></i>删除</span>
                                    </div>
                                </div>
                                <div class="listDisplay_content">
                                    <ul class="clearFix">
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单金额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单净额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>到期日</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>企业审核日</p>
                                        </li>
                                        <li>
                                            <p v-if="item.taskDefKey=='0'">待审核</p>
                                            <p v-if="item.taskDefKey=='1'">审核通过</p>
                                            <p v-if="item.taskDefKey=='2'">审核不通过</p>
                                            <p v-if="item.taskDefKey=='3'">已过期</p>
                                            <p>状态</p>
                                        </li>
                                        <li>
                                            <p>3</p>
                                            <p>票据数量</p>
                                        </li>
                                        <li>
                                            <router-link class="apply" tag="a"
                                                         :to="{name:'financingExamineDetails',params:{type:'apply',id:item.applyNum,code:item.taskDefKey}}">
                                                查看详情
                                            </router-link>
                                            <router-link
                                                :to="{name:'financingExamineDetails',params:{type:'examine',id:item.applyNum,code:item.taskDefKey}}"
                                                v-if="item.taskDefKey=='0'" class="apply1">审核
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 表单列表 -->
                    <!-- 分页 -->
                    <div class="block paging" v-if="from_list_all != []">
                        <el-pagination
                            @current-change="handleCurrentChange1"
                            :current-page="currentPage1"
                            :page-size="6"
                            layout="total, prev, pager, next, jumper"
                            :total=total[1]
                            prev-text="上一页"
                            next-text="下一页">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="3">
                <span slot="label">审核通过</span>
                <div>
                    <el-select v-model="huankuanValue" v-if="from_list_all != []" placeholder="请选择还款方"
                               v-on:change="huankuanValueChange()">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <!-- 表单列表 -->
                    <ul>
                        <li class="form_list" v-for="(item,index) in from_list_all">
                            <div>
                                <div class="listDisplay_title clearFix">
                                    <p>
                                        <span>{{item.productName}}</span>
                                        <span>{{item.applyTime}}</span>
                                        <span>还款方：{{item.repaymentParty}}</span>
                                    </p>
                                    <div>
                                        <router-link :to="{name:''}" v-if="item.taskDefKey=='2'" class="modify" tag="a">
                                            <i class="el-icon-edit-outline"></i>修改
                                        </router-link>
                                        <span class="del" @click="del(item.applyNum,index)"><i
                                            class="el-icon-delete"></i>删除</span>
                                    </div>
                                </div>
                                <div class="listDisplay_content">
                                    <ul class="clearFix">
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单金额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单净额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>到期日</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>企业审核日</p>
                                        </li>
                                        <li>
                                            <p v-if="item.taskDefKey=='0'">待审核</p>
                                            <p v-if="item.taskDefKey=='1'">审核通过</p>
                                            <p v-if="item.taskDefKey=='2'">审核不通过</p>
                                            <p v-if="item.taskDefKey=='3'">已过期</p>
                                            <p>状态</p>
                                        </li>
                                        <li>
                                            <p>3</p>
                                            <p>票据数量</p>
                                        </li>
                                        <li>
                                            <router-link class="apply" tag="a"
                                                         :to="{name:'financingExamineDetails',params:{type:'apply',id:item.applyNum,code:item.taskDefKey}}">
                                                查看详情
                                            </router-link>
                                            <router-link
                                                :to="{name:'financingExamineDetails',params:{type:'examine',id:item.applyNum,code:item.taskDefKey}}"
                                                v-if="item.taskDefKey=='0'" class="apply1">审核
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 表单列表 -->
                    <!-- 分页 -->
                    <div class="block paging" v-if="from_list_all != []">
                        <el-pagination
                            @current-change="handleCurrentChange2"
                            :current-page="currentPage2"
                            :page-size="6"
                            layout="total, prev, pager, next, jumper"
                            :total=total[3]
                            prev-text="上一页"
                            next-text="下一页">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="4">
                <span slot="label">审核不通过</span>
                <div>
                    <el-select v-model="huankuanValue" v-if="from_list_all != []" placeholder="请选择还款方"
                               v-on:change="huankuanValueChange()">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <!-- 表单列表 -->
                    <ul>
                        <li class="form_list" v-for="(item,index) in from_list_all">
                            <div>
                                <div class="listDisplay_title clearFix">
                                    <p>
                                        <span>{{item.productName}}</span>
                                        <span>{{item.applyTime}}</span>
                                        <span>还款方：{{item.repaymentParty}}</span>
                                    </p>
                                    <div>
                                        <router-link :to="{name:''}" v-if="item.taskDefKey=='2'" class="modify" tag="a">
                                            <i class="el-icon-edit-outline"></i>修改
                                        </router-link>
                                        <span class="del" @click="del(item.applyNum,index)"><i
                                            class="el-icon-delete"></i>删除</span>
                                    </div>
                                </div>
                                <div class="listDisplay_content">
                                    <ul class="clearFix">
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单金额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单净额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>到期日</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>企业审核日</p>
                                        </li>
                                        <li>
                                            <p v-if="item.taskDefKey=='0'">待审核</p>
                                            <p v-if="item.taskDefKey=='1'">审核通过</p>
                                            <p v-if="item.taskDefKey=='2'">审核不通过</p>
                                            <p v-if="item.taskDefKey=='3'">已过期</p>
                                            <p>状态</p>
                                        </li>
                                        <li>
                                            <p>3</p>
                                            <p>票据数量</p>
                                        </li>
                                        <li>
                                            <router-link class="apply" tag="a"
                                                         :to="{name:'financingExamineDetails',params:{type:'apply',id:item.applyNum,code:item.taskDefKey}}">
                                                查看详情
                                            </router-link>
                                            <router-link
                                                :to="{name:'financingExamineDetails',params:{type:'examine',id:item.applyNum,code:item.taskDefKey}}"
                                                v-if="item.taskDefKey=='0'" class="apply1">审核
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 表单列表 -->
                    <!-- 分页 -->
                    <div class="block paging" v-if="from_list_all != []">
                        <el-pagination
                            @current-change="handleCurrentChange3"
                            :current-page="currentPage3"
                            :page-size="6"
                            layout="total, prev, pager, next, jumper"
                            :total=total[3]
                            prev-text="上一页"
                            next-text="下一页">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="5">
                <span slot="label">已锁定<el-badge :value="5" class="item"></el-badge></span>
                <div>
                    <el-select v-model="huankuanValue" v-if="from_list_all != []" placeholder="请选择还款方"
                               v-on:change="huankuanValueChange()">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <!-- 表单列表 -->
                    <ul>
                        <li class="form_list" v-for="(item,index) in from_list_all">
                            <div>
                                <div class="listDisplay_title clearFix">
                                    <p>
                                        <span>{{item.productName}}</span>
                                        <span>{{item.applyTime}}</span>
                                        <span>还款方：{{item.repaymentParty}}</span>
                                    </p>
                                    <div>
                                        <router-link :to="{name:''}" v-if="item.taskDefKey=='2'" class="modify" tag="a">
                                            <i class="el-icon-edit-outline"></i>修改
                                        </router-link>
                                        <span class="del" @click="del(item.applyNum,index)"><i
                                            class="el-icon-delete"></i>删除</span>
                                    </div>
                                </div>
                                <div class="listDisplay_content">
                                    <ul class="clearFix">
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单金额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单净额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>到期日</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>企业审核日</p>
                                        </li>
                                        <li>
                                            <p v-if="item.taskDefKey=='0'">待审核</p>
                                            <p v-if="item.taskDefKey=='1'">审核通过</p>
                                            <p v-if="item.taskDefKey=='2'">审核不通过</p>
                                            <p v-if="item.taskDefKey=='3'">已过期</p>
                                            <p>状态</p>
                                        </li>
                                        <li>
                                            <p>3</p>
                                            <p>票据数量</p>
                                        </li>
                                        <li>
                                            <router-link class="apply" tag="a"
                                                         :to="{name:'financingExamineDetails',params:{type:'apply',id:item.applyNum,code:item.taskDefKey}}">
                                                查看详情
                                            </router-link>
                                            <!--<router-link class="aeapply" v-if="item.taskDefKey=='2'" tag="a"-->
                                            <!--:to="{name:'financingApply_add'}">重新申请-->
                                            <!--</router-link>-->
                                            <router-link
                                                :to="{name:'financingExamineDetails',params:{type:'examine',id:item.applyNum,code:item.taskDefKey}}"
                                                v-if="item.taskDefKey=='0'" class="apply1">审核
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 表单列表 -->
                    <!-- 分页 -->
                    <div class="block paging" v-if="from_list_all != []">
                        <el-pagination
                            @current-change="handleCurrentChange4"
                            :current-page="currentPage4"
                            :page-size="6"
                            layout="total, prev, pager, next, jumper"
                            :total=total[4]
                            prev-text="上一页"
                            next-text="下一页">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="6">
                <span slot="label">已过期<el-badge :value="6" class="item"></el-badge></span>
                <div>
                    <el-select v-model="huankuanValue" v-if="from_list_all != []" placeholder="请选择还款方"
                               v-on:change="huankuanValueChange()">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <!-- 表单列表 -->
                    <ul>
                        <li class="form_list" v-for="(item,index) in from_list_all">
                            <div>
                                <div class="listDisplay_title clearFix">
                                    <p>
                                        <span>{{item.productName}}</span>
                                        <span>{{item.applyTime}}</span>
                                        <span>还款方：{{item.repaymentParty}}</span>
                                    </p>
                                    <div>
                                        <router-link :to="{name:''}" v-if="item.taskDefKey=='2'" class="modify" tag="a">
                                            <i class="el-icon-edit-outline"></i>修改
                                        </router-link>
                                        <span class="del" @click="del(item.applyNum,index)"><i
                                            class="el-icon-delete"></i>删除</span>
                                    </div>
                                </div>
                                <div class="listDisplay_content">
                                    <ul class="clearFix">
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单金额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单净额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>到期日</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>企业审核日</p>
                                        </li>
                                        <li>
                                            <p v-if="item.taskDefKey=='0'">待审核</p>
                                            <p v-if="item.taskDefKey=='1'">审核通过</p>
                                            <p v-if="item.taskDefKey=='2'">审核不通过</p>
                                            <p v-if="item.taskDefKey=='3'">已过期</p>
                                            <p>状态</p>
                                        </li>
                                        <li>
                                            <p>3</p>
                                            <p>票据数量</p>
                                        </li>
                                        <li>
                                            <router-link class="apply" tag="a"
                                                         :to="{name:'financingExamineDetails',params:{type:'apply',id:item.applyNum,code:item.taskDefKey}}">
                                                查看详情
                                            </router-link>
                                            <!--<router-link class="aeapply" v-if="item.taskDefKey=='2'" tag="a"-->
                                            <!--:to="{name:'financingApply_add'}">重新申请-->
                                            <!--</router-link>-->
                                            <router-link
                                                :to="{name:'financingExamineDetails',params:{type:'examine',id:item.applyNum,code:item.taskDefKey}}"
                                                v-if="item.taskDefKey=='0'" class="apply1">审核
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 表单列表 -->
                    <!-- 分页 -->
                    <div class="block paging" v-if="from_list_all != []">
                        <el-pagination
                            @current-change="handleCurrentChange5"
                            :current-page="currentPage5"
                            :page-size="6"
                            layout="total, prev, pager, next, jumper"
                            :total=total[5]
                            prev-text="上一页"
                            next-text="下一页">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="7">
                <span slot="label">已还款<el-badge :value="6" class="item"></el-badge></span>
                <div>
                    <el-select v-model="huankuanValue" v-if="from_list_all != []" placeholder="请选择还款方"
                               v-on:change="huankuanValueChange()">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <!-- 表单列表 -->
                    <ul>
                        <li class="form_list" v-for="(item,index) in from_list_all">
                            <div>
                                <div class="listDisplay_title clearFix">
                                    <p>
                                        <span>{{item.productName}}</span>
                                        <span>{{item.applyTime}}</span>
                                        <span>还款方：{{item.repaymentParty}}</span>
                                    </p>
                                    <div>
                                        <router-link :to="{name:''}" v-if="item.taskDefKey=='2'" class="modify" tag="a">
                                            <i class="el-icon-edit-outline"></i>修改
                                        </router-link>
                                        <span class="del" @click="del(item.applyNum,index)"><i
                                            class="el-icon-delete"></i>删除</span>
                                    </div>
                                </div>
                                <div class="listDisplay_content">
                                    <ul class="clearFix">
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单金额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyAmount | currency('')}}</p>
                                            <p>应收账单净额(元)</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>到期日</p>
                                        </li>
                                        <li>
                                            <p>{{item.applyEndTime}}</p>
                                            <p>企业审核日</p>
                                        </li>
                                        <li>
                                            <p v-if="item.taskDefKey=='0'">待审核</p>
                                            <p v-if="item.taskDefKey=='1'">审核通过</p>
                                            <p v-if="item.taskDefKey=='2'">审核不通过</p>
                                            <p v-if="item.taskDefKey=='3'">已过期</p>
                                            <p>状态</p>
                                        </li>
                                        <li>
                                            <p>3</p>
                                            <p>票据数量</p>
                                        </li>
                                        <li>
                                            <router-link class="apply" tag="a"
                                                         :to="{name:'financingExamineDetails',params:{type:'apply',id:item.applyNum,code:item.taskDefKey}}">
                                                查看详情
                                            </router-link>
                                            <!--<router-link class="aeapply" v-if="item.taskDefKey=='2'" tag="a"-->
                                            <!--:to="{name:'financingApply_add'}">重新申请-->
                                            <!--</router-link>-->
                                            <router-link
                                                :to="{name:'financingExamineDetails',params:{type:'examine',id:item.applyNum,code:item.taskDefKey}}"
                                                v-if="item.taskDefKey=='0'" class="apply1">审核
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 表单列表 -->
                    <!-- 分页 -->
                    <div class="block paging" v-if="from_list_all != []">
                        <el-pagination
                            @current-change="handleCurrentChange5"
                            :current-page="currentPage6"
                            :page-size="6"
                            layout="total, prev, pager, next, jumper"
                            :total=total[6]
                            prev-text="上一页"
                            next-text="下一页">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import listDisplay from '@/components/bao/listDisplay/listDisplay'

    export default {
        name: 'receivableBill',
        data() {
            return {
                activeName: '1',
                currentPage: 1,
                currentPage1: 1,
                currentPage2: 1,
                currentPage3: 1,
                currentPage4: 1,
                currentPage5: 1,
                currentPage6: 1,
                options: [{
                    value: '全部',
                    label: '全部'
                }, {
                    value: '乐视金融',
                    label: '乐视金融'
                }, {
                    value: '天辰集团',
                    label: '天辰集团'
                }],
                value: '',
                from_list_all: [],
                huankuanValue: '全部',
                page: [1, 1, 1, 1, 1, 1, 1],
                code: "0",
                dataLength: '',
                huankuanShow: true,
                codeDel: '',
                //数据条数
                totalData: '',
                total: [1, 1, 1, 1, 1, 1, 1]
            }
        },
        components: {
            listDisplay
        },
        methods: {
            //tab页切换的编码
            handleClick(tab, event) {
                this.code = tab.index;
//                console.log(this.code);
            },
            del(code,index) { // 删除某个文件

                var _this = this;
                //删除传到后台的参数编号  code
                this.codeDel = code;
                let delObj = {
                    applyNum: this.codeDel
                };

                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.$http.post('/api/financing/applyWithdraw', this.qs.stringify(delObj)).then((res) => {
                        // 删除成功
                        if (res.data.code === 200) {
                            console.log(res.data.msg);
                            //删除成功的时候请求的数据----------------------------------------------------
                            _this.$http.post('/api/receivables/queryPayableList', _this.qs.stringify(_this.listData[_this.code])).then((res) => {
                                _this.from_list_all = res.data.data.allList;
                                _this.total[_this.code] = res.data.data.total;
                                console.log(this.total);
                            }).catch((err) => {
                                console.log(err);
                            });
                            //-------------------------------------------------------------------------
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    }).catch(error => {
                    });

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            //   0   分页当前页数的函数
            handleCurrentChange(val) {
                let obj = this.listData[0];
                obj.page = val;
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(obj)).then((res) => {
                    this.from_list_all = res.data.data.allList;
                }).catch((err) => {
                    console.log(err);
                });
            },
            //   1   分页当前页数的函数
            handleCurrentChange1(val) {
                let obj = this.listData[1];
                obj.page = val;
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(obj)).then((res) => {
                    this.from_list_all = res.data.data.allList;
                }).catch((err) => {
                    console.log(err);
                });
            },
            //   2   分页当前页数的函数
            handleCurrentChange2(val) {
                let obj = this.listData[2];
                obj.page = val;
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(obj)).then((res) => {
                    this.from_list_all = res.data.data.allList;
                }).catch((err) => {
                    console.log(err);
                });
            },
            //   3   分页当前页数的函数
            handleCurrentChange3(val) {
                let obj = this.listData[3];
                obj.page = val;
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(obj)).then((res) => {
                    this.from_list_all = res.data.data.allList;
                }).catch((err) => {
                    console.log(err);
                });
            },
            //   4   分页当前页数的函数
            handleCurrentChange4(val) {
                let obj = this.listData[4];
                obj.page = val;
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(obj)).then((res) => {
                    this.from_list_all = res.data.data.allList;
                }).catch((err) => {
                    console.log(err);
                });
            },
            //   5   分页当前页数的函数
            handleCurrentChange5(val) {
                let obj = this.listData[5];
                obj.page = val;
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(obj)).then((res) => {
                    this.from_list_all = res.data.data.allList;
                }).catch((err) => {
                    console.log(err);
                });
            },
            //   6   分页当前页数的函数
            handleCurrentChange5(val) {
                let obj = this.listData[6];
                obj.page = val;
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(obj)).then((res) => {
                    this.from_list_all = res.data.data.allList;
                }).catch((err) => {
                    console.log(err);
                });
            },
            //还款方的改变事件
            huankuanValueChange() {

            }
        },
        created: function () {
//            //全部列表请求
            this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(this.listData[this.code])).then((res) => {
                console.log(res);
                this.from_list_all = res.data.data.allList;
                this.total[this.code] = res.data.data.total;
            }).catch((err) => {
                console.log(err);
            });
        },
        computed: {
            listData() {
                let listD = [
                    {
                        payer: this.huankuanValue,     //还款方
                        page: this.page[0],          //分页页数
                        taskDefKey: this.code         //状态码
                    },
                    {
                        payer: this.huankuanValue,     //还款方
                        page: this.page[1],          //分页页数
                        taskDefKey: this.code         //状态码
                    },
                    {
                        payer: this.huankuanValue,     //还款方
                        page: this.page[2],          //分页页数
                        taskDefKey: this.code         //状态码
                    },
                    {
                        payer: this.huankuanValue,     //还款方
                        page: this.page[3],          //分页页数
                        taskDefKey: this.code         //状态码
                    },
                    {
                        payer: this.huankuanValue,     //还款方
                        page: this.page[4],          //分页页数
                        taskDefKey: this.code         //状态码
                    },
                    {
                        payer: this.huankuanValue,     //还款方
                        page: this.page[5],          //分页页数
                        taskDefKey: this.code         //状态码
                    },
                    {
                        payer: this.huankuanValue,     //还款方
                        page: this.page[6],          //分页页数
                        taskDefKey: this.code         //状态码
                    },
                ];
                return listD;
            },

        },
        watch: {
            huankuanValue: function () {
                //全部列表请求
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(this.listData[this.code])).then((res) => {
                    this.from_list_all = res.data.data.allList;
                }).catch((err) => {
                    console.log(err);
                });
            },
            code: function () {
                //全部列表请求
                this.$http.post('/api/receivables/queryPayableList', this.qs.stringify(this.listData[this.code])).then((res) => {
                    this.from_list_all = res.data.data.allList;
                    this.total[this.code] = res.data.data.total;
                }).catch((err) => {
                    console.log(err);
                });
            },


        }
    }
</script>

<style lang="less">
    .receivableBill {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 30px;
            font-size: 18px;
            line-height: 55px;
            color: #333;
            position: relative;
            & > div {
                position: absolute;
                top: -1px;
                right: 30px;
                & > a {
                    display: inline-block;
                    width: 170px;
                    height: 36px;
                    line-height: 36px;
                    border: 1px solid #FF6600;
                    border-radius: 2px;
                    text-align: center;
                    font-size: 16px;
                    color: #FF6600;
                    margin-right: 20px;
                }
            }
        }
        .form_list > div {

            margin-top: 19px;
            & > .listDisplay_title {
                width: 820px;
                height: 40px;
                background: #F7F7F7;
                margin: auto;
                & > p {
                    float: left;
                    font-size: 14px;
                    color: #666666;
                    line-height: 40px;
                    padding-left: 18px;
                    & > span:nth-child(2) {
                        margin: 0 10px 0 28px;
                    }
                }
                & > div {
                    float: right;
                    & > .modify {
                        height: 40px;
                        line-height: 40px;
                        font-size: 14px;
                        color: #3993FF;
                        letter-spacing: 0;
                        padding-right: 18px;
                    }
                    & > .del {
                        height: 40px;
                        line-height: 40px;
                        font-size: 14px;
                        color: #F45D4A;
                        letter-spacing: 0;
                        padding-right: 18px;
                        cursor: pointer;
                    }
                }

            }
            & > .listDisplay_content {
                width: 820px;
                min-height: 110px;
                background: #FFFFFF;
                margin: auto;
                border: 1px solid #EBEBEB;
                border-top: none;
                padding-bottom: 10px;
                & > ul {
                    min-height: 110px;
                    display: flex;
                    & > li {
                        flex-grow: 1;
                        margin: auto;
                        float: left;
                        & > p:nth-child(1) {
                            font-size: 14px;
                            color: #000000;
                            margin: 0 0 18px 0;
                        }
                        & > p:nth-child(2) {
                            font-size: 12px;
                            color: #999999;
                            letter-spacing: 0;
                        }
                        & > p {
                            text-align: center;
                        }
                        & > a.apply {
                            display: block;
                            width: 108px;
                            height: 36px;
                            line-height: 36px;
                            text-align: center;
                            border: 1px solid #3993FF;
                            border-radius: 2px;
                            font-size: 14px;
                            color: #3993FF;
                            letter-spacing: 0;
                            margin: 11px auto 0 auto;
                        }
                        & > a.aeapply {
                            display: block;
                            width: 108px;
                            height: 36px;
                            line-height: 36px;
                            text-align: center;
                            border: 1px solid #FF6600;
                            border-radius: 2px;
                            font-size: 14px;
                            color: #FF6600;
                            letter-spacing: 0;
                            margin: 11px auto 0 auto;
                        }
                        & > a.apply1 {
                            display: block;
                            width: 108px;
                            height: 36px;
                            line-height: 36px;
                            text-align: center;
                            border: 1px solid #FF6600;
                            border-radius: 2px;
                            font-size: 14px;
                            color: #FF6600;
                            letter-spacing: 0;
                            margin: 11px auto 0 auto;
                        }
                    }
                }
            }
        }
        .el-tabs {
            width: 820px;
            margin: auto;
            .el-tabs__nav {
                width: 100% !important;
                display: flex;
                & > .el-tabs__item {
                    flex-grow: 1 !important;
                    text-align: center;
                    height: 58px;
                    line-height: 58px;
                }
                & > .el-tabs__item:hover {
                    & > span {
                        color: #F45D4A;
                    }
                }

                & > .el-tabs__active-bar {
                    background: #F45D4A;
                }
            }
            .item {
                margin-top: -17px;
            }
            .is-active {
                color: #F45D4A;
            }
        }
        .paging {
            float: right;
            margin-top: 50px;
        }
    }
</style>
