import { Button,Text } from "@chakra-ui/react";
import Image from 'next/image'


function StackCard({thumbnail, text}) {
    return ( 
        <Button gap={'5'} variant="outline" colorScheme={'white'}>
            <Image src={thumbnail} width={'30'} height={'30'}/>
            <Text>{text}</Text>
        </Button>
    );
}

export default StackCard;