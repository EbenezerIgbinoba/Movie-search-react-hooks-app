import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const MovieDetails = props => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgb(0, 0, 0 , 0.86), rgb(0, 0, 0 , 0.86)), url('https://img.yts.mx/assets/images/movies/onward_2020/background.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
        <div className="section_block" style={{padding: "48px"}}>
            <div className="movieDetailWrapper">
                <div className="col_div banner">
                    <div className="movie" style={{ marginTop:'0px'}}>
                        <div className={`movie_wrapper`} style={{height: '390px', width: '90%'}}>
                            <img
                                width="200"
                                alt={`The movie titled: 2008`}
                                src={DEFAULT_PLACEHOLDER_IMAGE}
                                style={{height: '99.5%'}}
                            />
                        </div>
                    </div>
                    <div className="button_wrapper_movie_details" >
                        <button className="button success">
                        <i class="fa fa-download mr-2" aria-hidden="true" style={{color: '#428e21'}}></i>Download</button>
                    </div>
                </div>
                <div className="col_div main_content ">
                    <div className="details_main_content_wrapper">
                        <h2 className="text-white  movieDetailsHeader">Batman v Superman:<br /> Dawn of Justice</h2>
                        <h2 className="text-white mt-3 h3">2016 <br />Action / Adventure / Fantasy / Sci-Fi</h2><br />
                        <em className="italics__text text-white mt-4">Available in: &nbsp; </em> 
                        <button  className="button transparent mr-2" >3D. BluRay</button>
                        <button  className="button transparent mr-2" >720p.BluRay</button>
                        <button  className="button transparent mr-2" >1080p.BluRay</button>
                        <button  className="button transparent" >2160p.BluRay</button> <br />
                        <button className="button transparent mt-3">
                        <i class="fa fa-download mr-2" aria-hidden="true" style={{color: '#428e21'}}></i>Download Subititles</button><br />
                        <div className="row mt-3">
                            <div className="col-md-2">
                            <i class="fa fa-heart" aria-hidden="true" style={{color:'#6ac045', width: '75px' }}></i>

                            </div>
                            <div className="col-md-4">
                                <span style={{fontSize:'1.15em', fontWeight: 700}} className="text-white">976</span> 
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2">
                            <i class="fa fa-pagelines" aria-hidden="true" style={{color:'#6ac045', width: '75px' }}></i>

                            </div>
                            <div className="col-md-4">
                                <span style={{fontSize:'1.15em', fontWeight: 700}} className="text-white">28% - Critics</span> 
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2">
                            <i class="fa fa-pagelines" aria-hidden="true" style={{color:'#6ac045', width: '75px' }}></i>

                            </div>
                            <div className="col-md-4">
                                <span style={{fontSize:'1.15em', fontWeight: 700}} className="text-white"> 62% - Audience
                                </span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col_div small">
                    <h3 className="text-white similar_movies_header">Similar Movies</h3>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="movie" style={{ marginTop:'0px'}}>
                                <div className={`movie_wrapper`} style={{height: '178px', width: '92%'}}>
                                    <img
                                        width="200"
                                        alt={`The movie titled: 2008`}
                                        src={DEFAULT_PLACEHOLDER_IMAGE}
                                        style={{height: '99.5%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="movie" style={{ marginTop:'0px'}}>
                                <div className={`movie_wrapper`} style={{height: '178px', width: '92%'}}>
                                    <img
                                        width="200"
                                        alt={`The movie titled: 2008`}
                                        src={DEFAULT_PLACEHOLDER_IMAGE}
                                        style={{height: '99.5%'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="movie" style={{ marginTop:'0px'}}>
                                <div className={`movie_wrapper`} style={{height: '178px', width: '92%'}}>
                                    <img
                                        width="200"
                                        alt={`The movie titled: 2008`}
                                        src={DEFAULT_PLACEHOLDER_IMAGE}
                                        style={{height: '99.5%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="movie" style={{ marginTop:'0px'}}>
                                <div className={`movie_wrapper`} style={{height: '178px', width: '92%'}}>
                                    <img
                                        width="200"
                                        alt={`The movie titled: 2008`}
                                        src={DEFAULT_PLACEHOLDER_IMAGE}
                                        style={{height: '99.5%'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;

