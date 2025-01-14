import { useOne, useShow } from "@refinedev/core";
import { Show, NumberField, TextField, DateField } from "@refinedev/chakra-ui";
import { Heading } from "@chakra-ui/react";

export const PostShow = () => {
    const { queryResult } = useShow({
        metaData: {
            populate: ["category"],
        },
    });
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
        resource: "categories",
        id: record?.category?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Heading as="h5" size="sm" mt={4}>
                Id
            </Heading>
            <NumberField value={record?.id ?? ""} />

            <Heading as="h5" size="sm" mt={4}>
                Title
            </Heading>
            <TextField value={record?.title} />

            <Heading as="h5" size="sm" mt={4}>
                Category
            </Heading>

            {categoryIsLoading ? (
                <>Loading...</>
            ) : (
                <>{categoryData?.data?.title}</>
            )}

            <Heading as="h5" size="sm" mt={4}>
                Content
            </Heading>
            <TextField value={record?.content} />

            <Heading as="h5" size="sm" mt={4}>
                Created At
            </Heading>
            <DateField value={record?.createdAt} />

            <Heading as="h5" size="sm" mt={4}>
                Published At
            </Heading>
            <DateField value={record?.publishedAt} />

            <Heading as="h5" size="sm" mt={4}>
                Locale
            </Heading>
            <TextField value={record?.locale} />
        </Show>
    );
};
