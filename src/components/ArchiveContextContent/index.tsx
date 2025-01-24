import { FolderOpen, Info } from "lucide-react"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "../ui/context-menu"
import { Link } from "react-router-dom"

interface ArchiveContextContentProps {
  children: React.ReactNode
  folderId: number
}

export const ArchiveContextContent = ({ children, folderId }: ArchiveContextContentProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <Link to={`/library/category/archive?folderId=${folderId}`}>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <FolderOpen size={16} />
            <span>
              Abrir
            </span>
          </ContextMenuItem>
        </Link>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Info size={16} />
          <span>
            Detalhes
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}