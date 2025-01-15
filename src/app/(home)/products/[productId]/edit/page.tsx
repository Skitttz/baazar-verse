import { Metadata } from 'next';
import { IEditProductPageProps } from './types';

export const metadata: Metadata = {
  title: 'Editar Produto',
};

export default function EditProductPage({ params }: IEditProductPageProps) {
  const { productId } = params;
  return <div>EditProduct ProductId:{`${productId}`}</div>;
}
