import type { ReactNode } from 'react'
import React from 'react'
import './SettingsToggle.scss'
import Text from '../../general/Text'
import Toggle from '../../general/Toggle'

interface IProps {
  title: string
  subtitle?: string
  active: boolean
  icon: ReactNode
  checked: boolean
  setChecked: (isChecked: boolean) => void
}

const SettingsToggle: React.FC<IProps> = ({ icon, title, subtitle, checked, setChecked }) => {
  return (
    <div className="SettingsToggle">
      <div className="SettingsToggle__wrapper">
        <div className="SettingsToggle__textwrapper">
          {icon}
          <Text className="SettingsToggle__title" variant="paragraph-500">
            {title}
          </Text>
        </div>
        <Toggle name={title} id={title} checked={checked} setChecked={setChecked} />
      </div>
      {subtitle && (
        <Text className="SettingsToggle__subtitle" variant="small-500">
          {subtitle}
        </Text>
      )}
    </div>
  )
}

export default SettingsToggle
