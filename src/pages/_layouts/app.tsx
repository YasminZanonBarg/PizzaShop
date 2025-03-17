import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>Cabeçalho</h1>

      <div>
        <Outlet />
        {/* Essa tag indica que aqui virá o conteúdo específico de cada página */}
      </div>
    </div>
  )
}
