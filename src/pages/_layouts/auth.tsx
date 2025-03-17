import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <h1>Autenticação</h1>

      <div>
        <Outlet />
        {/* Essa tag indica que aqui virá o conteúdo específico de cada página */}
      </div>
    </div>
  )
}
