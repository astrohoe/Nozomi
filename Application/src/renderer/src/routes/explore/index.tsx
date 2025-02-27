import { useCallback, useEffect, useState } from 'react';
import { Fieldset, Field, Flex, Input } from '@chakra-ui/react';
import { Card } from '@renderer/components';
import { NativeSelectField, NativeSelectRoot } from '@renderer/components/ui/native-select';

export default function Explore() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchNozomis = async () => {
            const response = await fetch(import.meta.env.VITE_APIURL + 'explore');
            const json = await response.json();
            setData(json);
        };

        fetchNozomis();
    }, []);

    const inventory = useCallback(() => {
        if (data && data.length > 0) {
            return data.map((nozomi: any, idx: number) => <Card data={nozomi} key={idx} />);
        };

        return null;
    }, [data]);

    return (
        <Flex gap='2rem'>
            <Fieldset.Root size='lg' maxW='sm'>
                <Fieldset.Legend>Filter by</Fieldset.Legend>
                <Fieldset.Content>
                    <Field.Root>
                        <Input placeholder='Free text telex' />
                    </Field.Root>
                    <Field.Root>
                        <NativeSelectRoot width={300}>
                            <NativeSelectField items={['Option 1', 'Option 2', 'Option 3']} placeholder='Select' />
                        </NativeSelectRoot>
                    </Field.Root>
                </Fieldset.Content>
            </Fieldset.Root>
            

            <Flex gap='1rem' direction='column' overflow='scroll' height={540} scrollbarWidth='none'>
                { inventory() }
            </Flex>
        </Flex>
    );
};
