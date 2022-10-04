import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService) {
  }
  formGroup: FormGroup;
  isSubmited = false;
  formValid = false;

  validationMessages = {
    username: [
      {type: 'required', message: 'Trường này không được để trống!'},
    ]
  };

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isSubmited = true;
    this.authService.resetPassword(this.formGroup.value.username).subscribe(
      data => {
        console.log(11);
        this.toastr.success('Email đã được gửi!', 'Thành công: ', {
          timeOut: 2500,
          extendedTimeOut: 1500
        });
      }, err => {
        this.toastr.error('Sai tên đăng nhập hoặc tên đăng nhập chưa được đăng ký', 'Gửi email thất bại: ', {
          timeOut: 3000,
          extendedTimeOut: 1500
        });
        this.isSubmited = false;
        console.log(22);
      }
    );
  }
}
