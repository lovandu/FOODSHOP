import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <>
          <section class="page_404">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-12 ">
                          <div class="col-sm-10 col-sm-offset-1  text-center">
                              <div class="four_zero_four_bg">
                                  <h1 class="text-center ">404</h1>
                              </div>

                              <div class="contant_box_404">
                                  <h3 class="h2">Trang này không hiển thị</h3>

                                  <p>
                                      Có thể liên kết đã hỏng hoặc trang đã bị
                                      gỡ. Hãy kiểm tra xem liên kết mà bạn đang
                                      cố mở có chính xác không!
                                  </p>

                                  <Link href="" class="link_404">
                                      Quay về trang chủ
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default NotFound