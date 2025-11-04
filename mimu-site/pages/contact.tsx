export default function Contact(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-light mb-4">联系我们</h1>
      <p className="text-gray-600 mb-4">请扫描下方二维码添加微信，留言商品名称与数量。</p>
      <img src="/qr-placeholder.png" alt="QR" className="w-48 h-48" />
    </div>
  );
}
