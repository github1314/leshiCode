const validate = {
    /**
     * 验证是否是手机号
     * @param str
     * @returns {boolean}
     */
    isPhoneNum(str) {
        return /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
    },
    /**
     * 验证身份证号
     * @param str
     * @returns {boolean}
     */
    isIdCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
    },
    /**
     * 是否有值
     * @param str
     * @returns {boolean}
     */
    haveValue(str) {
        let s = str.replace(/\s+/g, "");
        return !!s;
    },
    /**
     * 验证固话
     * @param str
     * @returns {boolean}
     */
    isTEL(str) {
        return /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(str);
    },
    /**
     * 验证邮箱
     * @param str
     * @returns {boolean}
     */
    isEmail(str) {
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    },

    /**
     * 验证传真
     * @param str
     * @returns {boolean}
     */
    isFax(str) {
        return /^(\d{3,4}-)?\d{7,8}$/.test(str);
    }

};

export default validate;

