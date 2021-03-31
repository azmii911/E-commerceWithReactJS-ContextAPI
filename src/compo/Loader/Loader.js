import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import { Box } from '@material-ui/core';



function Loader() {
    return (
        <>
          <div className="row">
                    <div className="col-md-4"> <Box pt={5}>
            <Skeleton variant="rect" width="100%" height={200} />   
            <Skeleton width="100%" /><Skeleton width="100%" />
            </Box></div>
                    <div className="col-md-4"> <Box pt={5}>
            <Skeleton variant="rect" width="100%" height={200} />   
            <Skeleton width="100%" /><Skeleton width="100%" />
            </Box></div>
                    <div className="col-md-4"> <Box pt={5}>
            <Skeleton variant="rect" width="100%" height={200} />   
            <Skeleton width="100%" /><Skeleton width="100%" />
            </Box></div>

                </div>
                <div className="row">
                    <div className="col-md-4"> <Box pt={5}>
            <Skeleton variant="rect" width="100%" height={200} />   
            <Skeleton width="100%" /><Skeleton width="100%" />
            </Box></div>
                    <div className="col-md-4"> <Box pt={5}>
            <Skeleton variant="rect" width="100%" height={200} />   
            <Skeleton width="100%" /><Skeleton width="100%" />
            </Box></div>
                    <div className="col-md-4"> <Box pt={5}>
            <Skeleton variant="rect" width="100%" height={200} />   
            <Skeleton width="100%" /><Skeleton width="100%" />
            </Box></div>

                </div> 
        </>
    )
}

export default Loader
