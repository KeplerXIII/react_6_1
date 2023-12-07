import { useState } from 'react'
import ZoneClock from './zoneClock'

const TimezoneForm = () => {
    const [selectedZone, setSelectedZone] = useState<string>('')
    const [timezones, setTimezones] = useState<string[]>([])
  
    const handleZoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedZone(event.target.value)
    };
  
    const handleAddTimezone = () => {
      if (selectedZone && !timezones.includes(selectedZone)) {
        setTimezones([...timezones, selectedZone])
      }
    }

    const handleRemoveTimezone = (zone: string) => {
        setTimezones(timezones.filter((item) => item !== zone));
      }
  
    return (
      <div>
        <label htmlFor="timezone">Выберите временную зону:</label>
        <select id="timezone" value={selectedZone} onChange={handleZoneChange}>
          <option value="">-- Выберите зону --</option>
          <option value="Asia/Tokyo">Asia/Tokyo</option>
          <option value="Europe/London">Europe/London</option>
          <option value="Europe/Moscow">Europe/Moscow</option>
          <option value="America/New_York">America/New_York</option>
        </select>
  
        <button className='addBtn' onClick={handleAddTimezone}>Добавить</button>
  
        {timezones.map((zone) => (
          <ZoneClock key={zone} zone={zone} title={`Временная зона: ${zone}`} removeFunc={() => handleRemoveTimezone(zone)} />
        ))}
      </div>
    );
  };


export default TimezoneForm