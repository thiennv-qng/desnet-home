import { render } from 'react-dom'
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import View from './view'

import store from 'store'

render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/home" element={<View />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)
