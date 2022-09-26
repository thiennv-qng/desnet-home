import { render } from 'react-dom'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import View from './view'

import store from 'store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<View />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
