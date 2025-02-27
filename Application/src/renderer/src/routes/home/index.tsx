import { Flex } from "@chakra-ui/react"
import Carousel from './Carousel';
import Favorites from "./Favorites";
import Header from './Header';
import Overview from "./Overview";
import { useEffect, useState } from "react";

export default function Home() {
    const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const idx = setInterval(() => {
            setPage(page === 0 ? 1 : 0);
        }, 5000);
        
        return () => clearInterval(idx);
    }, [page]);
    
    return (
        <Flex direction='column' gap='2rem'>
            <Header page={page} onPage={(idx : number) => setPage(idx)} />
            { page === 0 ? 
                <Overview /> : 
                <Favorites /> }
            <Carousel />
        </Flex>
    );
};
