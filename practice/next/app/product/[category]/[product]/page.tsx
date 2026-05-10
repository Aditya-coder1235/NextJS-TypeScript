type Props = {
    params: {
        category: string;
        product: string;
    };
};

export default function ProductPage({ params }: Props) {
    return (
        <div>
            Category: {params.category}
            Product: {params.product}
        </div>
    );
}
