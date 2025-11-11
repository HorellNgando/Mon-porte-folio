"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute top-1/3 right-10 w-52 h-52 bg-gradient-to-br from-blue-600 to-purple-500 rounded-full blur-3xl opacity-15 animate-blobMove"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl blur-3xl opacity-15 animate-blobMove"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  )
}
