# LibPbl6
# pbl6-lib-team
> 
> Thực hiện: **Nguyễn Phước Vĩnh Phúc**
> 
> Cập nhật lần cuối: **14/12/2022**

### Mục lục  
[I. Các bước tạo mới function](#I)  

[1. Tạo function?](#createcomponent)  

[2. Import function](#importcomponent)  

[3. Update version function](#updateversion) 

[II. NPM Link](#II)  

[1. Tìm Hiểu NPM Link](#timhieu)  

[2. Sử dụng NPM Link](#usenpmlink)

[III. Cách sử dụng thư viện "LibPbl6"](#III)

[1. Cách sử dụng](#use)  

[IV. Function](#IV)

[1. isWds](#isWds)  
[1. convertStringToNumber](#convertStringToNumber)  

<a name = "I"></a>
# I. Các bước tạo mới function
<a name="createcomponent"></a>
## 1.*Tạo function*
* Clone code từ https://github.com/vinhphuc2903/pbl6-lib-team
* Tạo function mới trong Index.js

<a name="importcomponent"></a>
## 2.*Export function*
* Export function từ file index.js
* <a name="updateversion"></a>
## 3.*Update version component* :  
* Thay đổi version ở file pakage.json 
*	npm publish

<a name = "II"></a>
# II. NPM Link
<a name="timhieu"></a>
## 1.*Tìm Hiểu NPM Link*
* - Tác dụng:
* Tạo sự phụ thuộc để liên kết: Tạo ra 1 liên kết tượng trưng trong node_modules, thư mục để bất kỳ sửa đổi bạn thực hiện trong một mô-đun sẽ ngay lập tức được phản ánh trong bất kỳ dự án đã được thành lập để phụ thuộc vào đó (địa phương) phiên bản của mô-đun.

* <a name="III"></a>
# III. Cách sử dụng thư viện "LibPbl6"
<a name="use"></a>
## 1.*Cách sử dụng*
* Tạo file .npmrc trong project với data <br>
* npm i lib-pbl6
* Sử dụng: import * as "lib" from “lib-pbl6”
*-	Update phiên bản:
* Thay đổi tên phiên bản tương ứng trong file pakage.json
* o	npm i

* <a name="IV"></a>
# IV. Component và cách sử dụng"

<a name="isWds"></a>
## 1.*isWds*
* Input:  1000
* Output: 1000 VND


<a name="convertStringToNumber"></a>
## 2.*convertStringToNumber*
* Dùng để convert String To Money
* Truyền thêm biến true để hiển thị mệnh giá
* Input:  1000
* Output: 1.000 VND


