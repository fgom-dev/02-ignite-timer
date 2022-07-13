import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  SeparatorContainer,
  StartButtonContainer,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para seu projeto"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Desenvolver o site" />
            <option value="Desenvolver o app" />
            <option value="Desenvolver o game" />
            <option value="Desenvolver o software" />
            <option value="Desenvolver o sistema" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            step={5}
            min={0}
            max={60}
            placeholder="00"
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <SeparatorContainer>:</SeparatorContainer>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartButtonContainer type="submit" disabled>
          <Play size={24} />
          Começar
        </StartButtonContainer>
      </form>
    </HomeContainer>
  )
}
