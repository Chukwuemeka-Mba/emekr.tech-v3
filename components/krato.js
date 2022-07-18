import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm'
import { loadGLTFModel } from '../lib/model'


function easeOutCircle(x){
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Krato = () => {
    const refContainer = useRef()
    return (
        <Box ref={refContainer}>
        Nero !!!
        </Box>
    )
}
export default Krato