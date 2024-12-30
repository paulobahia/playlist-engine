import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { ChevronUp, FileText, Folder, X } from "lucide-react"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const data = {
  recentUploads: [
    {
      file: "24-12-2024",
      state: "U",
    },
    {
      file: "Fim de ano é no BK",
      state: "U",
    },
    {
      file: "Vinheta de Fim de Ano",
      state: "M",
    },
  ],
  archivesTree: [
    { folderName: "Acervo Musical Rede Aleluia", icon: "Icones5_dll_329.png", },
    { folderName: "Cliente", icon: "Icones5_dll_5.png", },
    { folderName: "Comerciais", icon: "Icones5_dll_330.png", },
    { folderName: "Commercial Videos", icon: "Icones5_dll_303.png", },
    { folderName: "Resume", icon: "Icones10_dll_335.png", },
    { folderName: "Downloaded", icon: "folders_dll_7.png", },
    { folderName: "Exact Time", icon: "relogios_dll_3.png", },
    { folderName: "Geral", icon: "Icones5_dll_4.png", },
    { folderName: "Institutional audios", icon: "icones6_dll_0.png", },
    { folderName: "Jingles", icon: "icones6_dll_1.png", },
    { folderName: "Jornalismo", icon: "Icones5_dll_4.png", },
    { folderName: "Nacionais", icon: "icones6_dll_93.png", },
    { folderName: "News", icon: "icones6_dll_66.png", },
    { folderName: "PlayStation", icon: "Icones_dll_23.png", },
    { folderName: "Pop", icon: "icones6_dll_2.png", },
    { folderName: "Pop Seq", icon: "folders_dll_6.png", },
    { folderName: "R&B", icon: "icones6_dll_4.png", },
    { folderName: "Reggae", icon: "Icones5_dll_347.png", },
    { folderName: "Remove Overlays", icon: "Icones5_dll_24.png", },
    { folderName: "Rock", icon: "instrumentos_dll_3.png", },
    { folderName: "Seals", icon: "icones6_dll_42.png", },
    { folderName: "Sweeper Videos", icon: "Icones5_dll_356.png", },
    { folderName: "Sweppers", icon: "ícones12_dll_75.png", },
    { folderName: "Tracks", icon: "icones6_dll_31.png", },
    { folderName: "Video Clipes", icon: "icones6_dll_209.png", },
    { folderName: "Virar Geradora", icon: "Icones5_dll_83.png", },
    { folderName: "Voice Track", icon: "icones6_dll_187.png", }
  ],
}

export const ArchivesLayout = () => {
  const { isOpen, toggleSidebar } = useInfoSidebar()
  const [isOpenCollapsibleArchive, setIsOpenCollapsibleArchive] = useState<boolean>(true)
  const [isOpenCollapsibleMoreData, setIsOpenCollapsibleMoreData] = useState<boolean>(false)
  const [isOpenCollapsiblePlaylists, setIsOpenCollapsiblePlaylists] = useState<boolean>(false)

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="fixed z-10 h-screen border-r top-14 border-muted-foreground/25">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Upload Recentes</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.recentUploads.map(({ file, state }, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton className="flex flex-row items-center gap-1.5">
                      <FileText />
                      <span className="text-xs font-medium">
                        {file}
                      </span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{state}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Pastas</SidebarGroupLabel>
            <SidebarGroupContent className="overflow-auto max-h-[70vh]">
              <SidebarMenu>
                {
                  data.archivesTree.map(({ icon, folderName }, index) => {
                    return (
                      <SidebarMenuItem key={index}>
                        <Link to={`/archive/${index}`}>
                          <SidebarMenuButton>
                            {
                              icon != ""
                                ?
                                <img src={`http://playlist.ddns.com.br:8010/icons/${icon}`} />
                                :
                                <Folder />
                            }
                            {folderName}
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>
                    )
                  })
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className={`w-full pl-[--sidebar-width] transition-all ease-linear ${isOpen ? 'pr-[23rem]' : 'pr-0'}`}>
        <Outlet />
      </div>
      <Sidebar collapsible="none" className={`fixed ease-linear right-0 z-10 h-screen transition-all border-r top-14 border-muted-foreground/25 ${isOpen ? 'w-[23rem]' : 'w-0'}`}>
        <SidebarContent className="p-4">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-xl font-semibold">Detalhes do arquivo</span>
              <span className="text-sm font-normal text-muted-foreground">Visualize os detalhes do arquivo selecionado</span>
            </div>
            <Button onClick={toggleSidebar} size={'sm'} variant={'ghost'}>
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="w-full rounded-md min-h-[220px] bg-muted" />
          <Collapsible
            open={isOpenCollapsibleArchive}
            onOpenChange={setIsOpenCollapsibleArchive}
            className="space-y-2"

          >
            <div className="flex items-center justify-between space-x-4">
              <h4 className={`text-sm font-medium text-foreground ${!isOpenCollapsibleArchive && "text-muted-foreground"}`}>
                Arquivo
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
                  <ChevronUp className="transition-transform duration-200 size-4 text-foreground shrink-0" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Arquivo</TableCell>
                    <TableCell className="text-left">3 Doors Down -  Let Me Go.mp3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pasta</TableCell>
                    <TableCell className="text-left">Sucessos 2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Duração</TableCell>
                    <TableCell className="text-left">2:33.3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Criado</TableCell>
                    <TableCell className="text-left">06/04/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Modificado</TableCell>
                    <TableCell className="text-left">28 Jan 2021 22:05:50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Título</TableCell>
                    <TableCell className="text-left">If You Intend</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={isOpenCollapsibleMoreData}
            onOpenChange={setIsOpenCollapsibleMoreData}
            className="space-y-2"

          >
            <div className="flex items-center justify-between space-x-4">
              <h4 className={`text-sm font-medium text-foreground ${!isOpenCollapsibleMoreData && "text-muted-foreground"}`}>
                Mais dados
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
                  <ChevronUp className="transition-transform duration-200 size-4 text-foreground shrink-0" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ISRC</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Comentário</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">BPM</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Faixa</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Url do artista</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Url para compra</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ringtone</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Foto</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={isOpenCollapsiblePlaylists}
            onOpenChange={setIsOpenCollapsiblePlaylists}
            className="space-y-2"

          >
            <div className="flex items-center justify-between space-x-4">
              <h4 className={`text-sm font-medium text-foreground ${!isOpenCollapsiblePlaylists && "text-muted-foreground"}`}>
                Playlists
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
                  <ChevronUp className="transition-transform duration-200 size-4 text-foreground shrink-0" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Artista</TableCell>
                    <TableCell className="text-left">10,000 Maniacs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Compositor</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Album</TableCell>
                    <TableCell className="text-left">(How You've Grown) Los Angeles, CA 10-25-1993</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ano</TableCell>
                    <TableCell className="text-left">1993</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Gênero</TableCell>
                    <TableCell className="text-left">Rock & Roll</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ritmo</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Gravadora</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Idioma</TableCell>
                    <TableCell className="text-left">Português</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Classificação</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vocal</TableCell>
                    <TableCell className="text-left"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lista</TableCell>
                    <TableCell className="text-left">Sucessos 2023</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CollapsibleContent>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider >
  )
}