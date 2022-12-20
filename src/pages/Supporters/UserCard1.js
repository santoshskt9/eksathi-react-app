import React from 'react';
import { useSnackbar } from 'notistack';
const cardImg = require('../../resources/img/Worker.jpg');

const UserCard1 = () => {
    const { enqueueSnackbar } = useSnackbar();

    const watchListHandler = (variant) => {
        console.log('Added to watchlist');
        enqueueSnackbar('Added to watchlist', { variant });
    }

  return (
    <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        
            <div className="col">
                <div className="card h-100">
                    <img src={cardImg} className="card-img-top" alt="..." height={150} style={{objectFit: 'cover'}}/>
                    <div class="card-body">
                        <h6 class="card-title">Vivek Kumar</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            id..</p>
                        <div class="ratings d-flex">
                            <p><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span><span
                                    class="ms-3 fw-semibold text-white bg-warning px-2 py-1 rounded-pill">certified</span>
                            </p>
                        </div>
                        <div class="tags d-flex flex-wrap lh-3 text-white fs-6 fw-semibold">
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">WEB DEV</small>
                            <small class="  bg-secondary py-1 px-2 rounded-1 mb-1 me-1">Full STACK</small>
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">BACKEND</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="p-2 my-auto">285projects</p>
                            <button class="btn btn-primary rounded-pill">connect</button>
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-3">
                            <button class="btn btn-sm btn-outline-primary" onClick={() => watchListHandler('success')}><i
                                    class='bx bxs-bookmark-alt-plus me-1'></i>Add to WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
            <div className="col">
                <div className="card h-100">
                    <img src={cardImg} className="card-img-top" alt="..." height={150} style={{objectFit: 'cover'}}/>
                    <div class="card-body">
                        <h6 class="card-title">Vivek Kumar</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            id..</p>
                        <div class="ratings d-flex">
                            <p><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span><span
                                    class="ms-3 fw-semibold text-white bg-warning px-2 py-1 rounded-pill">certified</span>
                            </p>
                        </div>
                        <div class="tags d-flex flex-wrap lh-3 text-white fs-6 fw-semibold">
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">WEB DEV</small>
                            <small class="  bg-secondary py-1 px-2 rounded-1 mb-1 me-1">Full STACK</small>
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">BACKEND</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="p-2 my-auto">285projects</p>
                            <button class="btn btn-primary rounded-pill">connect</button>
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-3">
                            <button class="btn btn-sm btn-outline-primary" onClick={() => watchListHandler('success')}><i
                                    class='bx bxs-bookmark-alt-plus me-1'></i>Add to WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
            <div className="col">
                <div className="card h-100">
                    <img src={cardImg} className="card-img-top" alt="..." height={150} style={{objectFit: 'cover'}}/>
                    <div class="card-body">
                        <h6 class="card-title">Vivek Kumar</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            id..</p>
                        <div class="ratings d-flex">
                            <p><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span><span
                                    class="ms-3 fw-semibold text-white bg-warning px-2 py-1 rounded-pill">certified</span>
                            </p>
                        </div>
                        <div class="tags d-flex flex-wrap lh-3 text-white fs-6 fw-semibold">
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">WEB DEV</small>
                            <small class="  bg-secondary py-1 px-2 rounded-1 mb-1 me-1">Full STACK</small>
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">BACKEND</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="p-2 my-auto">285projects</p>
                            <button class="btn btn-primary rounded-pill">connect</button>
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-3">
                            <button class="btn btn-sm btn-outline-primary" onClick={() => watchListHandler('success')}><i
                                    class='bx bxs-bookmark-alt-plus me-1'></i>Add to WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
            <div className="col">
                <div className="card h-100">
                    <img src={cardImg} className="card-img-top" alt="..." height={150} style={{objectFit: 'cover'}}/>
                    <div class="card-body">
                        <h6 class="card-title">Vivek Kumar</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            id..</p>
                        <div class="ratings d-flex">
                            <p><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span><span
                                    class="ms-3 fw-semibold text-white bg-warning px-2 py-1 rounded-pill">certified</span>
                            </p>
                        </div>
                        <div class="tags d-flex flex-wrap lh-3 text-white fs-6 fw-semibold">
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">WEB DEV</small>
                            <small class="  bg-secondary py-1 px-2 rounded-1 mb-1 me-1">Full STACK</small>
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">BACKEND</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="p-2 my-auto">285projects</p>
                            <button class="btn btn-primary rounded-pill">connect</button>
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-3">
                            <button class="btn btn-sm btn-outline-primary" onClick={() => watchListHandler('success')}><i
                                    class='bx bxs-bookmark-alt-plus me-1'></i>Add to WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
            <div className="col">
                <div className="card h-100">
                    <img src={cardImg} className="card-img-top" alt="..." height={150} style={{objectFit: 'cover'}}/>
                    <div class="card-body">
                        <h6 class="card-title">Vivek Kumar</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            id..</p>
                        <div class="ratings d-flex">
                            <p><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span><span
                                    class="ms-3 fw-semibold text-white bg-warning px-2 py-1 rounded-pill">certified</span>
                            </p>
                        </div>
                        <div class="tags d-flex flex-wrap lh-3 text-white fs-6 fw-semibold">
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">WEB DEV</small>
                            <small class="  bg-secondary py-1 px-2 rounded-1 mb-1 me-1">Full STACK</small>
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">BACKEND</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="p-2 my-auto">285projects</p>
                            <button class="btn btn-primary rounded-pill">connect</button>
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-3">
                            <button class="btn btn-sm btn-outline-primary" onClick={() => watchListHandler('success')}><i
                                    class='bx bxs-bookmark-alt-plus me-1'></i>Add to WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
            <div className="col">
                <div className="card h-100">
                    <img src={cardImg} className="card-img-top" alt="..." height={150} style={{objectFit: 'cover'}}/>
                    <div class="card-body">
                        <h6 class="card-title">Vivek Kumar</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            id..</p>
                        <div class="ratings d-flex">
                            <p><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span><span
                                    class="ms-3 fw-semibold text-white bg-warning px-2 py-1 rounded-pill">certified</span>
                            </p>
                        </div>
                        <div class="tags d-flex flex-wrap lh-3 text-white fs-6 fw-semibold">
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">WEB DEV</small>
                            <small class="  bg-secondary py-1 px-2 rounded-1 mb-1 me-1">Full STACK</small>
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">BACKEND</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="p-2 my-auto">285projects</p>
                            <button class="btn btn-primary rounded-pill">connect</button>
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-3">
                            <button class="btn btn-sm btn-outline-primary" onClick={() => watchListHandler('success')}><i
                                    class='bx bxs-bookmark-alt-plus me-1'></i>Add to WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
            <div className="col">
                <div className="card h-100">
                    <img src={cardImg} className="card-img-top" alt="..." height={150} style={{objectFit: 'cover'}}/>
                    <div class="card-body">
                        <h6 class="card-title">Vivek Kumar</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            id..</p>
                        <div class="ratings d-flex">
                            <p><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span><span
                                    class="ms-3 fw-semibold text-white bg-warning px-2 py-1 rounded-pill">certified</span>
                            </p>
                        </div>
                        <div class="tags d-flex flex-wrap lh-3 text-white fs-6 fw-semibold">
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">WEB DEV</small>
                            <small class="  bg-secondary py-1 px-2 rounded-1 mb-1 me-1">Full STACK</small>
                            <small class=" bg-secondary py-1 px-2 rounded-1 mb-1 me-1">BACKEND</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="p-2 my-auto">285projects</p>
                            <button class="btn btn-primary rounded-pill">connect</button>
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-3">
                            <button class="btn btn-sm btn-outline-primary" onClick={() => watchListHandler('success')}><i
                                    class='bx bxs-bookmark-alt-plus me-1'></i>Add to WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default UserCard1