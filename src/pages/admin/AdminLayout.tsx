import { Outlet, NavLink, Navigate, useNavigate } from "react-router-dom";
import { LayoutDashboard, Palette, FileText, Image as ImageIcon, Settings, LogOut } from "lucide-react";

export function AdminLayout() {
  const isAuthenticated = sessionStorage.getItem('cms_auth') === 'true';
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    sessionStorage.removeItem('cms_auth');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-black bg-linear-to-r from-orange-500 to-emerald-500 bg-clip-text text-transparent">
            Vibeathon CMS
          </h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavItem to="/admin" icon={LayoutDashboard} label="Tableau de bord" end />
          <NavItem to="/admin/pages" icon={FileText} label="Pages & Sections" />
          <NavItem to="/admin/theme" icon={Palette} label="Design & Thème" />
          <NavItem to="/admin/media" icon={ImageIcon} label="Médiathèque" />
          <NavItem to="/admin/settings" icon={Settings} label="Paramètres CMS" />
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">R</div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Root</span>
                <span className="text-xs text-gray-500">Administrateur</span>
              </div>
            </div>
            <button onClick={handleLogout} className="text-gray-400 hover:text-red-600 transition-colors" title="Déconnexion">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between">
          <h2 className="text-lg font-bold">Administration</h2>
          <a href="/" target="_blank" className="text-sm text-blue-600 font-medium hover:underline">
            Voir le site →
          </a>
        </header>
        <div className="flex-1 overflow-auto p-6 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function NavItem({ to, icon: Icon, label, end }: { to: string, icon: any, label: string, end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => 
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
          isActive 
            ? "bg-blue-50 text-blue-700 font-bold" 
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      {label}
    </NavLink>
  );
}
