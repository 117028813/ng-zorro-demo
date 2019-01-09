import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../providers/upload.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  fileList = []
  beforeUpload = file => {
    if (file.type.match(/image/)) {
      this.getBase64(file, src => {
        this.fileList.push({ name: file.name, dataSrc: src })
      })
    }
    return false
  }
  uploading: boolean = false

  constructor(private upload: UploadService, private http: HttpClient) { }

  ngOnInit() {
  }

  getBase64(img, callback) {
    const reader = new FileReader()
    reader.readAsDataURL(img)
    reader.addEventListener('load', () => callback(reader.result))
  }

  handleUpload() {
    console.log(this.fileList)
    this.uploading = true
    this.upload.upload(this.fileList).subscribe((data: any) => {
      if (data.result === 1) {
        this.uploading = false
        console.log(data)
      }
    })
  }

}
