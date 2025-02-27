import { Input, Field, Fieldset, Flex, Textarea } from '@chakra-ui/react';

export default function Create() {
    return (
        <Flex justify='center'>
            <Fieldset.Root size='lg' maxW='sm'>
                <Fieldset.Legend>Tell us about your Nozomi</Fieldset.Legend>
                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>Name of your Nozomi</Field.Label>
                        <Input />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Destination</Field.Label>
                        <Input />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Description</Field.Label>
                        <Textarea size='xl' />
                    </Field.Root>
                </Fieldset.Content>
            </Fieldset.Root>
        </Flex>
    );
};
