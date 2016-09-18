$(document).ready(function() {

	//手机验证扩展方法
	jQuery.validator.addMethod("isMobile", function(value, element) {
	  var length = value.length;
	  var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	  return this.optional(element) || (length == 11 && mobile.test(value));
	}, "手机格式不正确");

	//登录，密码搜索框选中时边框高亮
	$('.loginMes').on('focus blur', function(event) {
		var $placeholder=$(this).attr('placeholder');
		if (event.type==='focus') {
			$(this).css({
				'border':'1px solid #00A5FF'
			})
		} else {
			$(this).css({
				'border':'1px solid #ccc'
			})
		}
	});

	//登录界面验证
	$('.validate-login').validate({
		rules:{
			password:{
				required:true,
				minlength:6,
				maxlength:16
			}
		},
		messages:{
			password:{
				required:'请 输 入 密 码 ',
				minlength:'密 码 至 少 6 位 数',
				maxlength:'不 得 超 过 16 位 数'
			}
		},
		errorPlacement:function(error,element){
			error.appendTo(element.parent().next('.error_container'));
		}
	});



	//注册界面验证
	$('.validate-signup').validate({
		rules:{
			password:{
				required:true,
				minlength:6,
				maxlength:16
			},
			confirm_password:{
				required:true,
				minlength:6,
				maxlength:16,
				equalTo:'#password'
			},
			phone:{
				required:true,
				isMobile:true
			},
			confirm_message:{
				required:true,
				digits:true,
				maxlength:6
			}
		},
		messages:{
			password:{
				required:'请 输 入 密 码 ',
				minlength:'密 码 至 少 6 位 数',
				maxlength:'不 得 超 过 16 位 数'
			},
			confirm_password:{
				required:'请 输 入 密 码 ',
				minlength:'密 码 至 少 6 位 数',
				maxlength:'不 得 超 过 16 位 数',
				equalTo:'两 次 密 码 输 入 不 一 致'
			},
			phone:{
				required:'手 机 号 不 能 为 空',
				isMobile:'手 机 号 格 式 不 正 确 '
			},
			confirm_message:{
				required:'请 输 入 验 证 码 ',
				disits:'必 须 是 数 字 ',
				maxlength:'不 得 超 过 6 位 数'
			}
		},
		errorPlacement:function(error,element){
			error.appendTo(element.parent().next('.error_container-signup'));
		}
	})
});