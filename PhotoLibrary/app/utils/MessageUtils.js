import { Modal } from 'antd';
const confirm = Modal.confirm;



//confirm
export function showConfirm(msg, okMsg, errMsg) {
  confirm({
    title: '温馨提示',
    content: msg,
    onOk() {
      okMsg();
      // return 1;
    },
    onCancel() {
     // errMsg();
       return 0;
    },
    okText:'确定',
    cancelText:'取消'
  });
}

export function MsgSuccess(msg) {
  Modal.success({
    title: '成功提示',
    content: msg,
    okText:'确定',
  });
}

export function MsgError(msg) {
  Modal.error({
    title: '错误提示',
    content: msg,
    okText:'确定',
  });
}

export function MsgWarning(msg) {
  Modal.warning({
    title: '警告提示',
    content: msg,
    okText:'确定',
  });
}

export function MsgInfo(msg) {
  Modal.info({
    title: '温馨提示',
    content: msg,
    okText:'确定',
  });
}

export function onlyShowConfirm(msg, okMsg) {
  Modal.success({
    title: '成功提示',
    content: msg,
    okText:'确定',
    onOk(){
      okMsg();
    }
  });

}

export function onlyShowConfirmInfo(msg, okMsg) {
  Modal.info({
    title: '温馨提示',
    content: msg,
    okText:'确定',
    onOk(){
      okMsg();
    }
  });

}

export function okOrError(msg, okMsg, errMsg) {
  confirm({
    title: '温馨提示',
    content: msg,
    okText:'确定',
    cancelText:'取消',
    onOk(){
      okMsg();
    },
    onCancel() {
      errMsg();
    }
  });

}

