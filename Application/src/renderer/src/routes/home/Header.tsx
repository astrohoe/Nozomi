import { Breadcrumb } from '@chakra-ui/react';

export default function Header({ page, onPage }) {
    return (
        <Breadcrumb.Root textTransform='uppercase'>
            <Breadcrumb.List>
                <Breadcrumb.Item onClick={() => onPage(0)} cursor='pointer'>
                    { page === 0 ? 
                        <Breadcrumb.CurrentLink>Overview</Breadcrumb.CurrentLink> : 
                        <Breadcrumb.Link>Overview</Breadcrumb.Link> }
                </Breadcrumb.Item>
                <Breadcrumb.Separator>
                    &nbsp;
                </Breadcrumb.Separator>
                <Breadcrumb.Item onClick={() => onPage(1)} cursor='pointer'>
                    { page === 1 ? 
                        <Breadcrumb.CurrentLink>Favorites</Breadcrumb.CurrentLink> :
                        <Breadcrumb.Link>Favorites</Breadcrumb.Link> }
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
    );
};
