import { useCallback, useEffect, useState } from 'react';
import { Badge, Field, Fieldset, Flex, HStack, Input, Stat } from '@chakra-ui/react';
import { Card } from '@renderer/components';

export default function My() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchNozomis = async () => {
            const response = await fetch(import.meta.env.VITE_APIURL + 'my');
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
            <Flex direction='column' gap='1rem'>
                <Fieldset.Root size='lg'>
                    <Fieldset.Legend>Filter by</Fieldset.Legend>
                    <Fieldset.Content>
                        <Field.Root>
                            <Input placeholder='Free text telex' width={300} />
                        </Field.Root>
                    </Fieldset.Content>
                </Fieldset.Root>
                <Stat.Root>
                    <Stat.Label>Views</Stat.Label>
                    <HStack>
                        <Stat.ValueText>15200</Stat.ValueText>
                        <Badge colorPalette='green' gap='0'>
                            <Stat.UpIndicator />
                            12%
                        </Badge>
                    </HStack>
                    <Stat.HelpText>since last month</Stat.HelpText>
                </Stat.Root>
            </Flex>
            <Flex gap='1rem' direction='column' overflow='scroll' height={540} scrollbarWidth='none'>
                { inventory() }
            </Flex>
        </Flex>
    );
};
