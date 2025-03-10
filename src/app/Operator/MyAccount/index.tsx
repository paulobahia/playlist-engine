import { BRFlag, ESFlag, EUAFlag } from "@/assets/flags"
import { DarkMode, LighMode, SystemMode } from "@/assets/images"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DrawerDialogRemoveOperator } from "./components"

export const MyAccount = () => {
  const { setTheme, theme } = useTheme()

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Preferências do Operador</h1>
                  <p className="text-sm text-muted-foreground">Gerencie as configurações do seu operador</p>
                </div>
              </div>
            </header>
            <div className="px-4 py-8 border border-t-0 rounded-md rounded-t-none border-muted-foreground/25 sm:px-6">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col w-full gap-3">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Operador"
                    required
                    className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-lg font-bold tracking-tight">Tema da aplicação</h1>
                  <p className="text-xs text-muted-foreground">Isso se aplica a toda aplicação</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between px-4 py-8 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <div onClick={() => setTheme("system")} className={`flex items-center justify-center flex-1 rounded-sm h-36 border-2 ${theme === "system" ? "border-blue-500" : "border-transparent"}`}>
                  <img src={SystemMode} />
                </div>
                <span className="text-sm font-semibold text-accent-foreground">
                  Padrão do sitema
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <div onClick={() => setTheme("light")} className={`flex items-center justify-center flex-1 rounded-sm h-36 border-2 ${theme === "light" ? "border-blue-500" : "border-transparent"}`}>
                  <img src={LighMode} />
                </div>
                <span className="text-sm font-semibold text-accent-foreground">
                  Modo claro
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <div onClick={() => setTheme("dark")} className={`flex items-center justify-center flex-1 rounded-sm h-36 border-2 ${theme === "dark" ? "border-blue-500" : "border-transparent"}`}>
                  <img src={DarkMode} />
                </div>
                <span className="text-sm font-semibold text-accent-foreground">
                  Modo escuro
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="justify-between px-4 py-6 mx-auto border rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-lg font-bold tracking-tight">Idioma</h1>
                  <p className="text-xs text-muted-foreground">Isso irá alterar o idioma padrão da sua aplicação.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between px-4 py-8 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <Select>
                <SelectTrigger className="text-xs">
                  <SelectValue placeholder="Selecione um idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BR">
                    <div className="flex flex-row items-center gap-x-1">
                      <BRFlag />
                      <span>
                        Português
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="EUA">
                    <div className="flex flex-row items-center gap-x-1">
                      <EUAFlag />
                      <span>
                        Inglês
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ES">
                    <div className="flex flex-row items-center gap-x-1">
                      <ESFlag />
                      <span>
                        Espanhol
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <DrawerDialogRemoveOperator />
          <Button size={'sm'} variant={'ghost'} disabled>
            Cancelar
          </Button>
          <Button size={'sm'} disabled>
            Salvar
          </Button>
        </div>
      </footer>
    </main>
  )
}