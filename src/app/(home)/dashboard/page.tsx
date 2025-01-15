import MetricsView from '@/components/dashboard/metricsView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <>
      <div className="mb-12">
        <h1 className="font-bold text-2xl">Últimos 30 dias</h1>
        <span className="font-normal text-base text-gray-400">
          Confira as estatísticas da sua loja no último mês
        </span>
      </div>
      <MetricsView />
    </>
  );
}
